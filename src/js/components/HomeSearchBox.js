import React, { useState, useCallback } from "react"
import { serializeSearchParams } from "@mitodl/course-search-utils/dist/url_utils"

import SearchBox from "./SearchBox"

export default function HomeSearchBox() {
  const [text, setText] = useState("")

  const updateText = useCallback(
    event => {
      event.preventDefault()
      const text = event.target.value
      setText(text)
    },
    [setText]
  )

  const onSubmit = useCallback(
    event => {
      event.preventDefault()
      window.location = `/search/?${serializeSearchParams({
        text,
        activeFacets: {}
      })}`
    },
    [text]
  )

  return <SearchBox value={text} onChange={updateText} onSubmit={onSubmit} />
}
