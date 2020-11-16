import React from "react"
import { shallow } from "enzyme"

import SearchBox from "./SearchBox"

describe("SearchBox component", () => {
  const render = (props = {}) => shallow(<SearchBox {...props} />)

  test("should pass value, onChange to <input>, onSubmit to <form>", () => {
    const onChange = jest.fn()
    const onSubmit = jest.fn()
    const value = "value"
    const wrapper = render({ onChange, value, onSubmit })
    expect(wrapper.find("input").prop("onChange")).toEqual(onChange)
    expect(wrapper.find("input").prop("value")).toBe(value)

    expect(wrapper.find("form").prop("onSubmit")).toEqual(onSubmit)
    // user can click on the spyglass to submit as well
    expect(wrapper.find("i").prop("onClick")).toEqual(onSubmit)
  })
})
