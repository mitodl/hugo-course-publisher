import React, { useState, useCallback } from "react"
import debounce from "lodash.debounce"
import InfiniteScroll from "react-infinite-scroller"
import { useCourseSearch } from "@mitodl/course-search-utils"
import {
  LR_TYPE_COURSE,
  LR_TYPE_RESOURCEFILE
} from "@mitodl/course-search-utils/dist/constants"

import SearchResult from "./SearchResult"
import SearchBox from "./SearchBox"
import Loading, { Spinner } from "./Loading"
import FilterableFacet from "./FilterableFacet"

import { search } from "../lib/api"
import { searchResultToLearningResource, SEARCH_LIST_UI } from "../lib/search"

export const SEARCH_PAGE_SIZE = 10

export default function SearchPage() {
  const [results, setSearchResults] = useState([])
  const [facets, setSearchFacets] = useState(null)
  const [total, setTotal] = useState(0)
  const [completedInitialLoad, setCompletedInitialLoad] = useState(false)

  const runSearch = useCallback(
    async (text, activeFacets, from) => {
      if (activeFacets && activeFacets.type.length > 1) {
        // Default is LR_TYPE_ALL, don't want that here. course or resourcefile only
        activeFacets["type"] = [LR_TYPE_COURSE]
      }
      const newResults = await search({
        text,
        from,
        activeFacets,
        size: SEARCH_PAGE_SIZE
      })

      setSearchFacets(new Map(Object.entries(newResults.aggregations ?? {})))

      setSearchResults(
        from === 0 ?
          newResults.hits.hits :
          [...results, ...newResults.hits.hits]
      )
      setTotal(newResults.hits.total)
      setCompletedInitialLoad(true)
    },
    [setSearchResults, results, setTotal, setCompletedInitialLoad]
  )

  const clearSearch = useCallback(() => {
    setSearchResults([])
    setCompletedInitialLoad(false)
    setTotal(0)
  }, [setSearchResults, setCompletedInitialLoad, setTotal])

  // this callback just echos the updated params up to the URL bar
  // we debounce b/c it gets a little bit choppy otherwise
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setURLParam = useCallback(
    debounce(newSearch => {
      window.history.replaceState(null, null, `?${newSearch}`)
    }, 300),
    []
  )

  const {
    facetOptions,
    onUpdateFacets,
    updateText,
    loadMore,
    text,
    activeFacets,
    onSubmit,
    from,
    toggleFacets
  } = useCourseSearch(
    runSearch,
    clearSearch,
    setURLParam,
    facets,
    completedInitialLoad,
    SEARCH_PAGE_SIZE
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleResourceSearch = useCallback(
    toggleOn => async () => {
      await toggleFacets([
        ["type", LR_TYPE_RESOURCEFILE, toggleOn],
        ["type", LR_TYPE_COURSE, !toggleOn]
      ])
    },
    [toggleFacets]
  )

  const isResourceSearch = activeFacets["type"].includes(LR_TYPE_RESOURCEFILE)

  return (
    <div className="search-page w-100">
      <SearchBox value={text} onChange={updateText} onSubmit={onSubmit} />
      <div className="container">
        <div className="row">
          {isResourceSearch || !completedInitialLoad ? null : (
            <div className="col-3 mt-3 mt-lg-6"></div>
          )}
          <div className="search-results col-12 col-lg-8 col-xl-8 mt-3 mt-lg-6 mx-auto px-0">
            <div
              className={`search-toggle ${
                isResourceSearch ? "nofacet" : "facet"
              }`}
            >
              <ul className="nav">
                <li className="nav-item">
                  <button
                    className={`nav-link search-nav ${
                      isResourceSearch ? "" : "active"
                    }`}
                    href="#"
                    onClick={toggleResourceSearch(false)}
                  >
                    Courses
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link search-nav ${
                      isResourceSearch ? "active" : ""
                    }`}
                    href="#"
                    onClick={toggleResourceSearch(true)}
                  >
                    Resources
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {isResourceSearch || !completedInitialLoad ? null : (
            <div className="col-3 mt-3">
              <FilterableFacet
                results={facetOptions("topics")}
                name="topics"
                title="Topics"
                currentlySelected={activeFacets["topics"] || []}
                onUpdate={onUpdateFacets}
              />
            </div>
          )}
          <div className="search-results col-12 col-lg-8 col-xl-8 mt-3 mx-auto px-0">
            <InfiniteScroll
              hasMore={from + SEARCH_PAGE_SIZE < total}
              loadMore={loadMore}
              initialLoad={false}
              loader={completedInitialLoad ? <Spinner key="spinner" /> : null}
            >
              {completedInitialLoad ? (
                results.length === 0 ? (
                  <div className="no-results-found">
                    <span>No results found for your query</span>
                  </div>
                ) : (
                  results.map((hit, idx) => (
                    <SearchResult
                      key={`${hit._source.title}_${idx}`}
                      object={searchResultToLearningResource(hit._source)}
                      searchResultLayout={SEARCH_LIST_UI}
                    />
                  ))
                )
              ) : (
                <Loading />
              )}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  )
}
