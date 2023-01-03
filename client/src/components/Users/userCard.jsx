import React from 'react'
import "../Users/users.css"

const User = ({name, description, image, link}) => {
  return (
    <div className="user-card">
            <img src={image} alt={description}/>
            <h2 className="user-name">{name}</h2>
            <div className="user-details">
                <p>{description}</p>
                <div className="user-btns">
                    <a className="btn" href={link}>Connect</a>
                </div>
            </div>
        </div>
  )
}

export default User