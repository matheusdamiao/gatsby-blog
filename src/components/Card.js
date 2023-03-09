import { Link } from "gatsby"
import React from "react"

const Card = ({ icon, title, children }) => {
  return (
    <Link to={`/areasdeatuacao#${children}`}>
      <div className="card-div">
        <div className="card-icon">
          <img src={icon} alt="icon" />
        </div>

        <h1>{title}</h1>
        <p> saiba mais</p>
      </div>
    </Link>
  )
}

export default Card
