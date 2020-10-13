import React from "react"

import FilterableFacet from "./FilterableFacet"

export default function FacetDisplay(props) {
  const { facetMap, facetOptions, activeFacets, onUpdateFacets } = props

  return (
    <React.Fragment>
      {facetMap.map(([name, title], key) => (
        <FilterableFacet
          key={key}
          results={facetOptions(name)}
          name={name}
          title={title}
          currentlySelected={activeFacets[name] || []}
          onUpdate={onUpdateFacets}
        />
      ))}
    </React.Fragment>
  )
}
