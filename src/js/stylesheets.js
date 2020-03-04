const BASE_THEME = "BASE_THEME"
const THEME_VARIANT_ONE = "THEME_VARIANT_ONE"

const THEME_CLASSNAMES = {
  [BASE_THEME]:        "",
  [THEME_VARIANT_ONE]: "theme-one"
}

const THEME_OPTIONS = [
  { value: BASE_THEME, label: "Base Theme" },
  { value: THEME_VARIANT_ONE, label: "Theme #1" }
]

const STORAGE_KEY = "ocw-theme"

const getTheme = () => window.localStorage.getItem(STORAGE_KEY) || BASE_THEME

const setTheme = theme => window.localStorage.setItem(STORAGE_KEY, theme)

const setThemeClass = theme => {
  $("html").removeClass()
  $("html").addClass(THEME_CLASSNAMES[theme])
}

const selectCSS = {
  position: "absolute",
  top:      2,
  right:    5
}

export const initTheme = () => {
  const currentTheme = getTheme()
  setThemeClass(currentTheme)

  const selectEl = $(`<select>`).appendTo("body")
  selectEl.attr("value", currentTheme)
  selectEl.css(selectCSS)

  THEME_OPTIONS.forEach(({ value, label }) => {
    const option = $(`<option value=${value}>${label}</option>`)
    if (value === currentTheme) {
      option.attr("selected", true)
    }
    selectEl.append(option)
  })

  selectEl.change(e => {
    const { value } = e.target
    setTheme(value)
    setThemeClass(value)
  })
}
