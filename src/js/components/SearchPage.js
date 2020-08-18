import React, { useState, useEffect, useCallback } from "react"
import qs from "query-string"
import debounce from "lodash.debounce"
import InfiniteScroll from "react-infinite-scroller"

import SearchResult from "./SearchResult"
import SearchBox from "./SearchBox"
import Loading from "./Loading"

import { search } from "../lib/api"
import { searchResultToLearningResource, SEARCH_LIST_UI } from "../lib/search"

export const SEARCH_PAGE_SIZE = 10

export default function SearchPage() {
  const [results, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState("")
  const [from, setFrom] = useState(0)
  const [total, setTotal] = useState(0)
  const [completedInitialLoad, setCompletedInitialLoad] = useState(false)

  const runSearch = useCallback(
    async (text, incremental = false) => {
      const newResults = await search({
        text,
        from: incremental ? from : 0,
        size: SEARCH_PAGE_SIZE
      })

      setSearchResults(
        incremental ?
          [...results, ...newResults.hits.hits] :
          newResults.hits.hits
      )

      setFrom(incremental ? from + SEARCH_PAGE_SIZE : SEARCH_PAGE_SIZE)
      setTotal(newResults.hits.total)
      setCompletedInitialLoad(true)
    },
    [
      setSearchResults,
      results,
      from,
      setFrom,
      setTotal,
      setCompletedInitialLoad
    ]
  )

  // set searchText at mount and run the initial non-incremental search
  useEffect(() => {
    const { q } = qs.parse(window.location.search)
    setSearchText(q ?? "")
    runSearch(q ?? "")
  }, [])

  // this callback is called when the search text changes
  // so we need to
  //    1) echo the text change to the URL bar
  //    2) set the `completedInitialLoad` state to `false`
  //       in order to show a spinner in the UI
  //    3) run a non-incremental search with the new text
  //       (this will blow away existing search state)
  const setSearchQuery = useCallback(
    debounce(text => {
      window.history.replaceState(null, null, `?${qs.stringify({ q: text })}`)
      // text has changed, so we're restarting from the first page
      // as if we're dealing with the initial page load
      setCompletedInitialLoad(false)
      runSearch(text)
    }, 300),
    [runSearch, setCompletedInitialLoad]
  )

  const onChange = useCallback(
    e => {
      e.preventDefault()
      const text = e.target.value
      setSearchText(text)
      setSearchQuery(text)
    },
    [setSearchText, setSearchQuery]
  )

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      setSearchQuery(searchText)
    },
    [setSearchQuery, searchText]
  )

  // this callback runs an incremental search
  // is called only by the <InfiniteScroll /> component
  const loadMore = useCallback(() => {
    runSearch(searchText, true)
  }, [searchText, runSearch])

  return (
    <div className="search-page w-100">
      <SearchBox value={searchText} onChange={onChange} onSubmit={onSubmit} />
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
  )
}
