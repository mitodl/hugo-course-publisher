import React from "react"
import _ from "lodash"
import { shallow } from "enzyme"

import SearchFilter from "./SearchFilter"

describe("SearchFilter", () => {
  let onClickStub

  const renderSearchFilter = props =>
    shallow(<SearchFilter clearFacet={onClickStub} {...props} />)

  beforeEach(() => {
    onClickStub = jest.fn()
  })

  it("should render a search filter correctly", () => {
    const value = "Upcoming"
    const wrapper = renderSearchFilter({
      value,
      labelFunction: _.upperCase
    })
    const label = wrapper.text()
    expect(label.includes(_.upperCase(value))).toBeTruthy()
  })

  it("should trigger clearFacet function on click", async () => {
    const wrapper = renderSearchFilter({ value: "ocw" })
    wrapper.find(".remove-filter").simulate("click")
    expect(onClickStub).toHaveBeenCalledTimes(1)
  })
})
