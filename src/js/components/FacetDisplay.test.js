import React from "react"
import { shallow } from "enzyme"

import FacetDisplay from "./FacetDisplay"

describe("FacetDisplay component", () => {
  const render = (props = {}) => shallow(<FacetDisplay {...props} />)

  test("renders a FacetDisplay with expected FilterableFacets", async () => {
    const facetMap = [
      ["topics", "Topics"],
      ["types", "Types"],
      ["departments", "Departments"]
    ]
    const activeFacets = []
    const facetOptions = jest.fn()
    const onUpdateFacets = jest.fn()
    const wrapper = render({
      facetMap,
      facetOptions,
      activeFacets,
      onUpdateFacets
    })
    const facets = wrapper.children()
    expect(facets).toHaveLength(3)
    facets.map((facet, key) => {
      expect(facet.prop("name")).toBe(facetMap[key][0])
      expect(facet.prop("title")).toBe(facetMap[key][1])
    })
  })
})
