import React from "react"
import { mount } from "enzyme"

import SearchResult from "./SearchResult"

import { makeLearningResourceResult } from "../factories/search"
import { LR_TYPE_COURSE, LR_TYPE_RESOURCEFILE } from "../lib/constants"
import { getContentIcon, getCoverImageUrl } from "../lib/search"

describe("SearchResult component", () => {
  const render = object => mount(<SearchResult object={object} />)

  it("should render the things we expect for a course", () => {
    const object = makeLearningResourceResult(LR_TYPE_COURSE)
    const wrapper = render(object)
    expect(wrapper.find(".course-title").text()).toBe(object.title)
    expect(
      wrapper
        .find(".course-title")
        .find("a")
        .prop("href")
    ).toBe(object.url)
    expect(
      wrapper
        .find(".subtitles")
        .first()
        .text()
    ).toContain("Subject")
    expect(
      wrapper
        .find(".cover-image")
        .find("img")
        .first()
        .prop("src")
    ).toBe(getCoverImageUrl(object))
    expect(wrapper.find("DrawerImageDiv").exists()).toBeTruthy()
    expect(wrapper.find("LinkedImageDiv").exists()).toBeFalsy()
  })

  it("should render the things we expect for a resource", () => {
    const object = makeLearningResourceResult(LR_TYPE_RESOURCEFILE)
    const wrapper = render(object)
    expect(wrapper.find(".course-title").text()).toBe(
      `${getContentIcon(object.content_type)}${object.content_title}`
    )
    expect(
      wrapper
        .find(".course-title")
        .find("a")
        .prop("href")
    ).toBe(object.url)
    expect(
      wrapper
        .find(".subtitles")
        .first()
        .text()
    ).toBe(`${object.course_id.split("+").reverse()[0]} ${object.run_title}`)
    expect(
      wrapper
        .find(".subtitles")
        .at(1)
        .text()
    ).toContain("Subject")
    expect(
      wrapper
        .find(".cover-image")
        .find("img")
        .first()
        .prop("src")
    ).toBe(getCoverImageUrl(object))
    expect(wrapper.find("DrawerImageDiv").exists()).toBeFalsy()
    expect(wrapper.find("LinkedImageDiv").exists()).toBeTruthy()
  })
})
