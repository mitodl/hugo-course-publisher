import React, { useState, useCallback } from "react"
import debounce from "lodash.debounce"
import InfiniteScroll from "react-infinite-scroller"
import { useCourseSearch } from "@mitodl/course-search-utils"
import {
  LR_TYPE_COURSE,
  LR_TYPE_RESOURCEFILE
} from "@mitodl/course-search-utils/dist/constants"
import { without } from "ramda"

import SearchResult from "./SearchResult"
import SearchBox from "./SearchBox"
import SearchFilterDrawer from "./SearchFilterDrawer"
import Loading, { Spinner } from "./Loading"

import { search } from "../lib/api"
import { searchResultToLearningResource, SEARCH_LIST_UI } from "../lib/search"
import { emptyOrNil, isDoubleQuoted } from "../lib/util"

export const SEARCH_PAGE_SIZE = 10

const COURSE_FACETS = [
  ["level", "Level", false],
  ["topics", "Topics", true],
  ["department_name", "Department", true]
]

// TBD
const RESOURCE_FACETS = []

export default function SearchPage() {
  const [results, setSearchResults] = useState([])
  const [facets, setSearchFacets] = useState(null)
  const [suggestions, setSuggestions] = useState([])
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

      const { suggest } = newResults
      if (!emptyOrNil(suggest) && !emptyOrNil(text)) {
        setSuggestions(
          without([text], suggest).map(suggestion =>
            isDoubleQuoted(text) ? `"${suggestion}"` : suggestion
          )
        )
      }

      setSearchFacets(new Map(Object.entries(newResults.aggregations ?? {})))

      setSearchResults(
        from === 0 ?
          newResults.hits.hits :
          [...results, ...newResults.hits.hits]
      )
      setTotal(newResults.hits.total)
      setCompletedInitialLoad(true)
    },
    [
      setSearchResults,
      results,
      setTotal,
      setCompletedInitialLoad,
      setSuggestions
    ]
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
    toggleFacets,
    toggleFacet,
    clearAllFilters,
    acceptSuggestion
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
      const toggledFacets = [
        ["type", LR_TYPE_RESOURCEFILE, toggleOn],
        ["type", LR_TYPE_COURSE, !toggleOn]
      ]
      // Remove any facets not relevant to the new search type
      const newFacets = new Map(toggleOn ? RESOURCE_FACETS : COURSE_FACETS)
      Object.entries(activeFacets).forEach(([key, list]) => {
        if (!newFacets.has(key) && !emptyOrNil(list)) {
          list.forEach(value => {
            toggledFacets.push([key, value, false])
          })
        }
      })
      toggleFacets(toggledFacets)
    },
    [toggleFacets, activeFacets]
  )

  const isResourceSearch = activeFacets["type"].includes(LR_TYPE_RESOURCEFILE)
  const facetMap = isResourceSearch ? RESOURCE_FACETS : COURSE_FACETS

  return (
    <div className="search-page w-100">
      <div className="search-box py-3 py-sm-5 py-md-7">
        <div className="search-box-inner col-12 col-lg-8 col-xl-8  mx-auto d-flex flex-column align-items-center">
          <h1 className="mb-3 mb-sm-5 mb-md-7">Explore OpenCourseWare</h1>
          <div className="w-100 d-flex flex-column align-items-center search-input-wrapper">
            <span className="align-self-start pb-1 pb-sm-3">SEARCH</span>
            <div className="w-100 position-relative">
              <SearchBox
                value={text}
                onChange={updateText}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {isResourceSearch ? null : <div className="col-3 mt-3 mt-lg-6"></div>}
          <div className="search-results col-12 col-lg-8 col-xl-8 mt-3 mt-lg-6 mx-auto px-0">
            <div
              className={`search-toggle ${
                isResourceSearch ? "nofacet" : "facet"
              }`}
            >
              {!emptyOrNil(suggestions) ? (
                <div className="row suggestions">
                  Did you mean
                  {suggestions.map((suggestion, i) => (
                    <span className="pl-1" key={i}>
                      <a
                        className="suggestion"
                        onClick={e => {
                          e.preventDefault()
                          acceptSuggestion(suggestion)
                          setSuggestions([])
                        }}
                        onKeyPress={e => {
                          if (e.key === "Enter") {
                            acceptSuggestion(suggestion)
                            setSuggestions([])
                          }
                        }}
                        tabIndex="0"
                      >
                        {` ${suggestion}`}
                      </a>
                      {i < suggestions.length - 1 ? " | " : ""}
                    </span>
                  ))}
                  ?
                </div>
              ) : null}
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
          {isResourceSearch ? null : (
            <SearchFilterDrawer
              facetMap={facetMap}
              facetOptions={facetOptions}
              activeFacets={activeFacets}
              onUpdateFacets={onUpdateFacets}
              clearAllFilters={clearAllFilters}
              toggleFacet={toggleFacet}
            />
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
