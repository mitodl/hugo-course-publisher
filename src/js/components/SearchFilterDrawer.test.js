import React from "react"
import { shallow } from "enzyme"

import SearchFilterDrawer from "./SearchFilterDrawer"

describe("SearchFilterDrawer component", () => {
  const render = (props = {}) => shallow(<SearchFilterDrawer {...props} />)
  const hookUtils = require("../lib/util")
  const getViewportWidthMock = jest.spyOn(hookUtils, "getViewportWidth")

  test("desktop mode renders a FacetDisplay", async () => {
    getViewportWidthMock.mockImplementation(() => 1000)
    const wrapper = render()
    expect(wrapper.find("FacetDisplay").exists()).toBeTruthy()
  })

  test("phone mode renders a filter control", async () => {
    getViewportWidthMock.mockImplementation(() => 500)
    const wrapper = render()
    const filterControl = wrapper.find(".filter-controls")
    expect(filterControl.text()).toBe("Filterarrow_drop_down")
    filterControl.simulate("click")
    wrapper.update()
    expect(wrapper.find(".search-filter-drawer-open").exists()).toBeTruthy()
    expect(wrapper.find("FacetDisplay").exists()).toBeTruthy()
    wrapper.find(".blue-btn").simulate("click")
    wrapper.update()
    expect(wrapper.find(".search-filter-drawer-open").exists()).toBeFalsy()
  })
})
