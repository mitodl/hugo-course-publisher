import React, { useState, useEffect, useCallback } from "react"
import qs from "query-string"
import debounce from "lodash.debounce"

import SearchResult from "./SearchResult"
import SearchBox from "./SearchBox"

import { search } from "../lib/api"
import { searchResultToLearningResource, SEARCH_LIST_UI } from "../lib/search"

export default function SearchPage() {
  const [results, setSearchResults] = useState(null)
  const [searchText, setSearchText] = useState("")

  const runSearch = useCallback(
    async text => {
      const results = await search({ text })
      setSearchResults(results)
    },
    [setSearchResults]
  )

  // set searchText at mount
  useEffect(() => {
    const { q } = qs.parse(window.location.search)
    setSearchText(q || "")
    runSearch(q || "")
  }, [])

  const updateSearch = useCallback(
    debounce(text => {
      window.history.replaceState(null, null, `?${qs.stringify({ q: text })}`)
      runSearch(text)
    }, 300),
    [runSearch]
  )

  const onChange = useCallback(
    e => {
      e.preventDefault()
      const text = e.target.value
      setSearchText(text)
      updateSearch(text)
    },
    [setSearchText]
  )

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      updateSearch(searchText)
    },
    [searchText]
  )

  return (
    <div className="search-page w-100">
      <SearchBox value={searchText} onChange={onChange} onSubmit={onSubmit} />
      {results ? (
        <div className="search-results col-12 col-lg-8 col-xl-8 px-3 px-md-5 mt-3 mt-lg-6 mx-auto">
          {(results.hits?.hits ?? []).map(hit => (
            <SearchResult
              key={hit._source.title}
              object={searchResultToLearningResource(hit._source)}
              searchResultLayout={SEARCH_LIST_UI}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
