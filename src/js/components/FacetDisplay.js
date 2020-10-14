import React from "react"
import _ from "lodash"

import FilterableFacet from "./FilterableFacet"
import SearchFilter from "./SearchFilter"

const FacetDisplay = React.memo(
  function FacetDisplay(props) {
    const {
      facetMap,
      facetOptions,
      activeFacets,
      onUpdateFacets,
      clearAllFilters,
      toggleFacet
    } = props

    const anyFiltersActive =
      _.flatten(_.toArray(Object.values(activeFacets))).length > 0

    return (
      <React.Fragment>
        {anyFiltersActive ? (
          <div className="active-search-filters">
            <div className="filter-section-title">
              Filters
              <span
                className="clear-all-filters"
                onClick={clearAllFilters}
                onKeyPress={e => {
                  if (e.key === "Enter") {
                    clearAllFilters()
                  }
                }}
                tabIndex="0"
              >
                Clear All
              </span>
            </div>
            {facetMap.map(([name, , labelFunction]) =>
              (activeFacets[name] || []).map((facet, i) => (
                <SearchFilter
                  key={i}
                  value={facet}
                  clearFacet={() => toggleFacet(name, facet, false)}
                  labelFunction={labelFunction}
                />
              ))
            )}
          </div>
        ) : null}
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
  },
  (prevProps, nextProps) => {
    return (
      prevProps.activeFacets === nextProps.activeFacets &&
      prevProps.clearAllFilters === nextProps.clearAllFilters &&
      prevProps.toggleFacet === nextProps.toggleFacet &&
      prevProps.facetOptions === nextProps.facetOptions &&
      prevProps.onUpdateFacets === nextProps.onUpdateFacets
    )
  }
)

export default FacetDisplay
