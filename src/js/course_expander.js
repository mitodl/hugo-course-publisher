import React from "react"
import ReactDOM from "react-dom"
import ClampLines from "react-clamp-lines"

class ModifiedClampLines extends ClampLines {
  render() {
    if (!this.props.text) {
      return null
    }

    return (
      <div className={this.getClassName()}>
        <div
          ref={e => (this.element = e)}
          id={`clamped-content-${this.uuid}`}
          aria-hidden={this.state.expanded}
        >
          {this.watch ? this.state.text : null}
        </div>
        {this.watch ? null : (
          <div dangerouslySetInnerHTML={{ __html: this.props.originalHtml }} />
        )}
        {this.getButton()}
      </div>
    )
  }
}

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
    if (expanderButton) {
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

  let index = 0
  for (const container of document.querySelectorAll(".course-description")) {
    const html = container.innerHTML
    const text = container.innerText
    container.innerHTML = ""
    ReactDOM.render(
      <ModifiedClampLines
        originalHtml={html}
        text={text}
        id={`course-description-${index}`}
        moreText={
          <span>
            Read more <i className="material-icons">keyboard_arrow_right</i>
          </span>
        }
        lessText={
          <span>
            Show Less <i className="material-icons">keyboard_arrow_down</i>
          </span>
        }
        lines={5}
      />,
      container
    )

    index += 1
  }
}

export { initCourseInfoExpander }
