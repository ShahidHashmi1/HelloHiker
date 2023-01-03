import "../Trails/trail.css";
import React from "react";

const TrailCard = ({ name, description, image, link }) => {
    return (
        <div className="trail-card">
            <img className="img-size" src={image} alt={description}/>
            <h2 className="trail-name">{name}</h2>
            <div className="trail-details">
                <p>{description}</p>
                <div className="trl-btns">
                    <a className="btn" href={link}>Link</a>
                </div>
            </div>
        </div>
    )
}

export default TrailCard