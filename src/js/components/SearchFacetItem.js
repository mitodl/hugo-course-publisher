// @flow
import React from "react"
import Dotdotdot from "react-dotdotdot"

const featuredFacetNames = ["audience", "certification"]

function updateFacetCheckbox(props) {
  const { facet, isChecked, name, onUpdate } = props
  onUpdate({
    target: {
      name,
      value:   facet.key,
      checked: !isChecked
    }
  })
}

export default function SearchFacetItem(props) {
  const { facet, isChecked, onUpdate, labelFunction, name } = props

  const labelText = labelFunction ? labelFunction(facet.key) : facet.key

  return (
    <div
      className={isChecked ? "facet-visible checked" : "facet-visible"}
      onClick={() => updateFacetCheckbox(props)}
      onKeyPress={e => {
        if (e.key === "Space") {
          updateFacetCheckbox(props)
        }
      }}
    >
      <input
        type="checkbox"
        name={name}
        value={facet.key}
        checked={isChecked}
        onChange={onUpdate}
      />
      <div className="facet-label-div">
        <div
          className={
            featuredFacetNames.includes(name) ?
              "facet-key facet-key-large" :
              "facet-key"
          }
        >
          <Dotdotdot clamp={1}>{labelText}</Dotdotdot>
        </div>
        <div className="facet-count">{facet.doc_count}</div>
      </div>
    </div>
  )
}
