import React from "react"
import { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import { search } from "../lib/api"
import { times } from "ramda"

import SearchPage, { SEARCH_PAGE_SIZE } from "./SearchPage"

import { makeCourseResult } from "../factories/search"

const mockGetResults = () =>
  times(makeCourseResult, SEARCH_PAGE_SIZE).map(result => ({ _source: result }))

jest.mock("../lib/api", () => ({
  __esModule: true,
  search:     jest.fn(async () => ({
    hits: { hits: mockGetResults() }
  }))
}))

jest.mock("lodash.debounce", () => jest.fn(fn => fn))

describe("SearchPage component", () => {
  const render = async (searchParam = "") => {
    window.location.search = searchParam
    let wrapper
    await act(async () => {
      wrapper = mount(<SearchPage />)
    })
    return wrapper
  }

  test("should run a search at startup with URL parameter", async () => {
    await render()
    expect(search.mock.calls[0]).toEqual([
      { text: "", from: 0, size: SEARCH_PAGE_SIZE }
    ])
  })

  test("the user can update the search text and submit", async () => {
    const wrapper = await render()
    wrapper
      .find("input")
      .simulate("change", { target: { value: "New Search Text" } })
    await act(async () => {
      wrapper.find("i").simulate("click")
    })
    expect(search.mock.calls).toEqual([
      [{ text: "", from: 0, size: SEARCH_PAGE_SIZE }],
      // the change event fires one of these, and clicking the icon the other
      [{ text: "New Search Text", from: 0, size: SEARCH_PAGE_SIZE }],
      [{ text: "New Search Text", from: 0, size: SEARCH_PAGE_SIZE }]
    ])
    wrapper.update()
    expect(wrapper.find("SearchResult").length).toBe(SEARCH_PAGE_SIZE)
  })

  it("should show spinner when updating text", async () => {
    const wrapper = await render()
    wrapper.update()
    // loading goes away because first load is done
    expect(wrapper.find("Loading").exists()).toBeFalsy()
    wrapper
      .find("input")
      .simulate("change", { target: { value: "New Search Text" } })
    await act(async () => {
      wrapper.find("i").simulate("click")
    })
    // wrapper is back b/c the user has 're-started' the search w/ fresh query
    expect(wrapper.find("Loading").exists()).toBeTruthy()
  })

  test("should support InfiniteScroll-ing", async () => {
    const wrapper = await render()
    wrapper.update()
    await act(async () => {
      wrapper.find("InfiniteScroll").prop("loadMore")()
    })
    wrapper.update()
    await act(async () => {
      wrapper.find("InfiniteScroll").prop("loadMore")()
    })
    wrapper.update()
    expect(search.mock.calls).toEqual([
      [{ text: "", from: 0, size: SEARCH_PAGE_SIZE }],
      [{ text: "", from: SEARCH_PAGE_SIZE, size: SEARCH_PAGE_SIZE }],
      [{ text: "", from: 2 * SEARCH_PAGE_SIZE, size: SEARCH_PAGE_SIZE }]
    ])
    expect(wrapper.find("SearchResult").length).toBe(3 * SEARCH_PAGE_SIZE)
  })

  it("should show spinner during initial load", async () => {
    const wrapper = await render()
    expect(wrapper.find("Loading").exists()).toBeTruthy()
    wrapper.update()
    expect(wrapper.find("Loading").exists()).toBeFalsy()
  })
})
