// JS Goes here - ES6 supported

import "./css/main.scss"
import $ from "jquery"
window.jQuery = $
window.$ = $
import Popper from "popper.js"
window.Popper = Popper
import "bootstrap-material-design"
$(document).ready(() => {
  $("body").bootstrapMaterialDesign()
})
