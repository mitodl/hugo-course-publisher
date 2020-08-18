import React from "react"

export default function Loading(props) {
  const { className } = props

  return (
    <div className={`loading ${className || ""}`}>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  )
}
