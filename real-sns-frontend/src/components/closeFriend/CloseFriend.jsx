import React from 'react'

const CloseFriend = ({user}) => {
  return (
    <li className='sidebarfriend'>
            <img src={user.profilePicture} alt="" className='sidebarfriendimg'/>
            <span className='sidebarfriendname'>{user.username}</span>
          </li>
  )
}

export default CloseFriend