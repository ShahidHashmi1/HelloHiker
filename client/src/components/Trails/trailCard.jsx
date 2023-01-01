import "../Trails/trail.css";
import React from "react";

const TrailCard = ({ name, description, image, link }) => {
    return (
        <div className="trail-card">
            <img src={image} alt={description}/>
            <h2 className="trail-name">{name}</h2>
            <div className="trail-details">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TrailCard