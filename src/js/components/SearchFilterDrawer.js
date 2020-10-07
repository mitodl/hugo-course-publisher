import React, { useState } from "react"

import FacetDisplay from "./FacetDisplay"
import { DESKTOP } from "../lib/constants"
import { useDeviceCategory } from "../hooks/util"

export default function SearchFilterDrawer(props) {
  const deviceCategory = useDeviceCategory()
  const [drawerOpen, setDrawerOpen] = useState(false)

  if (deviceCategory === DESKTOP) {
    return (
      <div className="col-3 mt-3 mt-lg-6">
        <FacetDisplay {...props} />
      </div>
    )
  }

  const closeDrawer = () => setDrawerOpen(false)

  return drawerOpen ? (
    <div className="search-filter-drawer-open">
      <div className="controls">
        <i className="material-icons" onClick={closeDrawer}>
          close
        </i>
      </div>
      <div className="apply-filters">
        <button onClick={closeDrawer} className="blue-btn">
          Apply Filters
        </button>
      </div>
      <div className="contents">
        <FacetDisplay {...props} />
      </div>
    </div>
  ) : (
    <div className="controls">
      <div onClick={() => setDrawerOpen(true)} className="filter-controls">
        Filter
        <i className="material-icons">arrow_drop_down</i>
      </div>
    </div>
  )
}
