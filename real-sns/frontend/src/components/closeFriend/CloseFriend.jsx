import React from 'react'

const CloseFriend = ({user}) => {

  const PUBLIC_FOLDER =  process.env.REACT_APP_PUBLIC_FOLDER;


  return (
    <li className='sidebarfriend'>
            <img src={ PUBLIC_FOLDER + user.profilePicture} alt="" className='sidebarfriendimg'/>
            <span className='sidebarfriendname'>{user.username}</span>
          </li>
  )
}

export default CloseFriend