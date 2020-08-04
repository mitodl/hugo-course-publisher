import "./css/main.scss"
import "../node_modules/tippy.js/dist/tippy.css"
import "../node_modules/nanogallery2/src/css/nanogallery2.css"
import "./css/search.scss"

import Popper from "popper.js"
import "bootstrap-material-design"
import tippy from "tippy.js"
import "offcanvas-bootstrap/dist/js/bootstrap.offcanvas.js"
import "shifty"
import "hammerjs"
import "imagesloaded"
import "screenfull"
import "nanogallery2/src/jquery.nanogallery2.core.js"
import ReactDOM from "react-dom"
import React from "react"

import HomeSearchBox from "./js/components/HomeSearchBox"
import SearchPage from "./js/components/SearchPage"

import { initTheme } from "./js/stylesheets"
import { initPdfViewers } from "./js/pdf_viewer"
import { initSentry } from "./js/sentry"

window.jQuery = $
window.$ = $
window.Popper = Popper

$(document).ready(() => {
  $("body").bootstrapMaterialDesign()

  // hacky coming-soon popover
  document.querySelectorAll(".coming-soon").forEach(el => {
    tippy(el, {
      content:   "Coming soon!",
      trigger:   "click",
      placement: "top"
    })
  })

  const searchBoxEl = document.querySelector("#home-search-box")
  if (searchBoxEl) {
    ReactDOM.render(<HomeSearchBox />, searchBoxEl)
  }

  const searchPageEl = document.querySelector("#search-page")
  if (searchPageEl) {
    ReactDOM.render(<SearchPage />, searchPageEl)
  }

  initTheme()
  initPdfViewers()
  initSentry()
})
