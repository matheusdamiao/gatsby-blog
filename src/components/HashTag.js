import React, { useState } from "react"

const HashTag = ({
  backgroundColor,
  color,
  children,
  setSearchState,
  searchState,
  tag,
}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        minWidth: "10px",
        fontSize: "14px",
        padding: "3px 8px 3px 8px",
        borderRadius: "25px",
        fontFamily: "Urbanist ",
        fontWeight: "500",
        color: `${color ? color : "#7a7a7a"}`,
        margin: "0px 5px 5px 5px",
        cursor: "pointer",
      }}
      onClick={() => setSearchState({ query: `${tag}` })}
    >
      {children}
    </div>
  )
}

export default HashTag
