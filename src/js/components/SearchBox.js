import React from "react"

export default function SearchBox(props) {
  const { value, onChange, onSubmit } = props

  return (
    <div className="search-box py-3 py-sm-5 py-md-7">
      <div className="search-box-inner col-12 col-lg-8 col-xl-8  mx-auto d-flex flex-column align-items-center">
        <h1 className="mb-3 mb-sm-5 mb-md-7">Explore Open Course Ware</h1>
        <div className="w-100 d-flex flex-column align-items-center search-input-wrapper">
          <span className="align-self-start pb-1 pb-sm-3">SEARCH</span>
          <div className="w-100 position-relative">
            <form onSubmit={onSubmit}>
              <input
                className="w-100 pl-5"
                type="text"
                onChange={onChange}
                value={value}
                placeholder="Enter Course Name, Department, Course Number..."
              />
              <i
                onClick={onSubmit}
                className="material-icons position-absolute"
              >
                search
              </i>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
