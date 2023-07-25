import React from "react"

const Card = ({ icon, title, children }) => {
  return (
    <a className="card-link" href={`/areasdeatuacao#${children}`}>
      <div className="card-div">
        <div className="card-icon">
          <img src={icon} alt="icon" />
        </div>

        <h1>{title}</h1>
        <p> saiba mais</p>
      </div>
    </a>
  )
}

export default Card
