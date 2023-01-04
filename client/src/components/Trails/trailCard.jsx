import "./trail.css";
import React from "react";

const TrailCard = ({ name, description, image, link }) => {
    return (
        <div className="trail-card">
            <img className="img-size" src={image} alt={description}/>
            <h2 className="trail-name">{name}</h2>
            <div className="trail-details">
                <p>{description}</p>
                <div className="trl-btns">
                    <a className="btn" href={link}>More Info Here</a>
                </div>
            </div>

            <p className="disclaimerTxt">Information courtesy of <a href="https://https://www.tripstodiscover.com/">tripstodiscover.com</a></p>

        </div>
        
    )
}

export default TrailCard