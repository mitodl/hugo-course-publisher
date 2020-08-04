import React from "react"
import { mount } from "enzyme"

import HomeSearchBox from "./HomeSearchBox"

describe("HomeSearchBox component", () => {
  const render = () => mount(<HomeSearchBox />)

  test("should change URL on submit", () => {
    const wrapper = render()
    wrapper.find("input").simulate("change", { target: { value: "Hello" } })
    wrapper.find("form").simulate("submit")
    expect(window._URL).toContain("/search/?q=Hello")
  })
})
