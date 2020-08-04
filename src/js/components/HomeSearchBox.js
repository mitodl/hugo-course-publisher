import React, { useState, useCallback } from "react"
import qs from "query-string"

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
      window.location = `/search/?${qs.stringify({
        q: text
      })}`
    },
    [text]
  )

  return <SearchBox value={text} onChange={updateText} onSubmit={onSubmit} />
}
