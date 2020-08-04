import React from "react"
import { mount } from "enzyme"

import SearchResult from "./SearchResult"

import { makeLearningResourceResult } from "../factories/search"
import { LR_TYPE_COURSE } from "../lib/constants"

describe("SearchResult component", () => {
  const render = object => mount(<SearchResult object={object} />)

  it("should render the things we expect", () => {
    const object = makeLearningResourceResult(LR_TYPE_COURSE)
    const wrapper = render(object)

    expect(wrapper.find(".resource-type").text()).toBe("Course")
    expect(wrapper.find(".course-title").text()).toBe(object.title)
  })
})
