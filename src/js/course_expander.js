const toggleExpand = (button, container) => {
  const expanded = button.classList.contains("expanded")
  if (expanded) {
    button.classList.remove("expanded")
    container.classList.add("collapsed")
    button.querySelector(".material-icons").textContent = "keyboard_arrow_right"
  } else {
    button.classList.add("expanded")
    container.classList.remove("collapsed")
    button.querySelector(".material-icons").textContent = "keyboard_arrow_down"
  }
}

const initCourseInfoExpander = () => {
  for (const container of document.querySelectorAll(".course-info")) {
    const expanderButton = container.querySelector(".expand-link")
    expanderButton.addEventListener("click", event => {
      event.preventDefault()
      toggleExpand(expanderButton, container)
    })
    expanderButton.addEventListener("keypress", event => {
      if (event.key === "Enter") {
        event.preventDefault()
        toggleExpand(expanderButton, container)
      }
    })
  }
}

export { initCourseInfoExpander }
