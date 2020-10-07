import React from "react"
import { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import { search } from "../lib/api"
import { times } from "ramda"
import { INITIAL_FACET_STATE } from "@mitodl/course-search-utils/dist/constants"
import { serializeSearchParams } from "@mitodl/course-search-utils/dist/url_utils"
import {
  LR_TYPE_COURSE,
  LR_TYPE_RESOURCEFILE
} from "@mitodl/course-search-utils/dist/constants"
import FilterableFacet from "./FilterableFacet"

import SearchPage, { SEARCH_PAGE_SIZE } from "./SearchPage"

import { makeCourseResult } from "../factories/search"

const mockGetResults = () =>
  times(makeCourseResult, SEARCH_PAGE_SIZE).map(result => ({ _source: result }))

let resolver

const resolveSearch = () =>
  act(async () => {
    resolver()
  })

jest.mock("../lib/api", () => ({
  __esModule: true,
  search:     jest.fn(async () => {
    return new Promise(resolve => {
      resolver = () => {
        resolve({
          hits: { hits: mockGetResults() }
        })
      }
    })
  })
}))

jest.mock("lodash.debounce", () => jest.fn(fn => fn))

const defaultCourseFacets = {
  ...INITIAL_FACET_STATE,
  type: [LR_TYPE_COURSE]
}

const defaultResourceFacets = {
  ...INITIAL_FACET_STATE,
  type: [LR_TYPE_RESOURCEFILE]
}

describe("SearchPage component", () => {
  const render = async (searchParam = "") => {
    window.location.search = searchParam
    let wrapper
    await act(async () => {
      wrapper = mount(<SearchPage />)
    })
    return wrapper
  }

  beforeEach(() => {
    delete window.location

    window.location = {
      search: ""
    }
  })

  //
  ;[
    { text: undefined, activeFacets: {} },
    { text: "amazing text!", activeFacets: {} },
    {
      text:         "great search",
      activeFacets: { topics: ["mathematics"] }
    },
    {
      text:         undefined,
      activeFacets: { topics: ["science"] }
    }
  ].forEach(params => {
    test(`should search at startup with ${serializeSearchParams(
      params
    )}`, async () => {
      const searchString = serializeSearchParams(params)
      await render(searchString)

      expect(search.mock.calls[0]).toEqual([
        {
          text:         params.text,
          from:         0,
          size:         SEARCH_PAGE_SIZE,
          activeFacets: {
            ...defaultCourseFacets,
            ...params.activeFacets
          }
        }
      ])
    })
  })

  test("the user can update the search text and submit", async () => {
    const wrapper = await render()
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "New Search Text" } })
    await act(async () => {
      wrapper
        .find("SearchBox")
        .find("i")
        .simulate("click")
      resolver()
    })
    expect(search.mock.calls).toEqual([
      [
        {
          text:         undefined,
          from:         0,
          size:         SEARCH_PAGE_SIZE,
          activeFacets: defaultCourseFacets
        }
      ],
      [
        {
          text:         "New Search Text",
          from:         0,
          size:         SEARCH_PAGE_SIZE,
          activeFacets: defaultCourseFacets
        }
      ]
    ])
    wrapper.update()
    expect(wrapper.find("SearchResult").length).toBe(SEARCH_PAGE_SIZE)
  })

  test("the user can switch to resource search", async () => {
    const wrapper = await render()
    await act(async () => {
      wrapper
        .find(".search-nav")
        .at(1)
        .simulate("click")
      resolver()
    })
    expect(search.mock.calls).toEqual([
      [
        {
          text:         undefined,
          from:         0,
          size:         SEARCH_PAGE_SIZE,
          activeFacets: defaultCourseFacets
        }
      ],
      [
        {
          text:         undefined,
          from:         0,
          size:         SEARCH_PAGE_SIZE,
          activeFacets: defaultResourceFacets
        }
      ]
    ])
    wrapper.update()
    expect(wrapper.find("SearchResult").length).toBe(SEARCH_PAGE_SIZE)
  })

  it("should show spinner when searching", async () => {
    const wrapper = await render()
    await resolveSearch()
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "New Search Text" } })
    await act(async () => {
      wrapper.find("i").simulate("click")
    })
    wrapper.update()
    expect(wrapper.find("Loading").exists()).toBeTruthy()
  })

  test("should support InfiniteScroll-ing", async () => {
    const wrapper = await render()
    await resolveSearch()
    wrapper.update()
    await act(async () => {
      wrapper.find("InfiniteScroll").prop("loadMore")()
    })
    await resolveSearch()
    wrapper.update()
    await act(async () => {
      wrapper.find("InfiniteScroll").prop("loadMore")()
    })
    await resolveSearch()
    wrapper.update()
    expect(search.mock.calls).toEqual([
      [
        {
          text:         undefined,
          from:         0,
          size:         SEARCH_PAGE_SIZE,
          activeFacets: defaultCourseFacets
        }
      ],
      [
        {
          text:         undefined,
          from:         SEARCH_PAGE_SIZE,
          size:         SEARCH_PAGE_SIZE,
          activeFacets: defaultCourseFacets
        }
      ],
      [
        {
          text:         undefined,
          from:         2 * SEARCH_PAGE_SIZE,
          size:         SEARCH_PAGE_SIZE,
          activeFacets: defaultCourseFacets
        }
      ]
    ])
    expect(wrapper.find("SearchResult").length).toBe(3 * SEARCH_PAGE_SIZE)
  })

  test("should show spinner during initial load", async () => {
    const wrapper = await render()
    expect(wrapper.find("Loading").exists()).toBeTruthy()
    await resolveSearch()
    wrapper.update()
    expect(wrapper.find("Loading").exists()).toBeFalsy()
  })

  test("should render a FilterableFacet for topic, department", async () => {
    const wrapper = await render()
    await resolveSearch()
    wrapper.update()
    const [topic, department] = wrapper.find(FilterableFacet)
    expect(topic.props.name).toEqual("topics")
    expect(topic.props.title).toEqual("Topics")
    expect(topic.props.currentlySelected).toEqual([])
    expect(department.props.name).toEqual("department_name")
    expect(department.props.title).toEqual("Department")
    expect(department.props.currentlySelected).toEqual([])
  })
})
