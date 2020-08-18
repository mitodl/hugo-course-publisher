import React from "react"
import { shallow } from "enzyme"

import Loading from "./Loading"

describe("Loading", () => {
  test("should render the right divs", () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.find(".loading .spinner").exists()).toBeTruthy()
    expect(
      wrapper
        .find(".spinner")
        .children()
        .map(el => el.prop("className"))
    ).toEqual(["bounce1", "bounce2", "bounce3"])
  })

  test("should let you set a className", () => {
    const wrapper = shallow(<Loading className="not-loading-lol" />)
    expect(wrapper.find(".loading.not-loading-lol").exists()).toBeTruthy()
  })
})
