import React from "react"

export default function SearchBox(props) {
  const { value, onChange, onSubmit } = props

  return (
    <form onSubmit={onSubmit} className="search-box">
      <input
        className="w-100 pl-5"
        type="text"
        onChange={onChange}
        value={value ?? ""}
        placeholder="Enter Course Name, Department, Course Number..."
      />
      <i onClick={onSubmit} className="material-icons position-absolute">
        search
      </i>
    </form>
  )
}
