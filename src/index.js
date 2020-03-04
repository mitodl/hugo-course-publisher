import "./css/main.scss"
import "../node_modules/tippy.js/dist/tippy.css"

import $ from "jquery"
import Popper from "popper.js"
import "bootstrap-material-design"
import tippy from "tippy.js"
import "offcanvas-bootstrap/dist/js/bootstrap.offcanvas.js"
import { initTheme } from "./js/stylesheets"

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

  initTheme()
})
