import React, { useState, useCallback } from "react"
import debounce from "lodash.debounce"
import InfiniteScroll from "react-infinite-scroller"
import { useCourseSearch } from "@mitodl/course-search-utils"

import SearchResult from "./SearchResult"
import SearchBox from "./SearchBox"
import Loading from "./Loading"
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
    from
  } = useCourseSearch(
    runSearch,
    clearSearch,
    setURLParam,
    facets,
    completedInitialLoad,
    SEARCH_PAGE_SIZE
  )

  return (
    <div className="search-page w-100">
      <SearchBox value={text} onChange={updateText} onSubmit={onSubmit} />
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3 mt-lg-6">
            <FilterableFacet
              results={facetOptions("topics")}
              name="topics"
              title="Topics"
              currentlySelected={activeFacets["topics"] || []}
              onUpdate={onUpdateFacets}
            />
          </div>
          <div className="search-results col-12 col-lg-8 col-xl-8 px-3 px-md-5 mt-3 mt-lg-6 mx-auto">
            <InfiniteScroll
              hasMore={from + SEARCH_PAGE_SIZE < total}
              loadMore={loadMore}
              initialLoad={false}
              loader={completedInitialLoad ? <Loading /> : null}
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
