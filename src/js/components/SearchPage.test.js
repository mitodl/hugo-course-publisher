import React from "react"
import { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import { search } from "../lib/api"

import SearchPage from "./SearchPage"

jest.mock("../lib/api", () => ({
  __esModule: true,
  search:     jest.fn(async () => ({}))
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
    expect(search.mock.calls[0]).toEqual([{ text: "" }])
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
      [{ text: "" }],
      [{ text: "New Search Text" }],
      [{ text: "New Search Text" }]
    ])
  })
})
