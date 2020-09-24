import React from "react"
import { shallow } from "enzyme"

import Loading, { AnimatedEmptyCard } from "./Loading"

describe("Loading", () => {
  test("should render ten cards", () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.find("AnimatedEmptyCard").length).toBe(10)
  })

  test("Card should render what we want", () => {
    const wrapper = shallow(<AnimatedEmptyCard />)

    expect(wrapper.find("Card").prop("className")).toBe("compact-post-summary")
    expect(wrapper.find("ContentLoader")).toBeTruthy()
    expect(wrapper.find("rect").length).toBe(5)
  })
})
