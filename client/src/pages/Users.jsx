import React from 'react'
import '../components/Users/users.css'
import userData from '../components/Users/userData'
import UserCard from '../components/Users/userCard'

const Users = () => {
  return (
      <div className='user-container'>
        <div className='card-container'>
          <UserCard {...userData[0]}/>
          <UserCard {...userData[1]}/>
          <UserCard {...userData[2]}/>
        </div>
      </div>
  )
}

export default Users