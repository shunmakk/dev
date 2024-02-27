import React from 'react'

const Online = ({user}) => {
  return (
    <li className='rightbarFirend'>
            <div className='rightbarProfileImgContainer'>
              <img src={user.profilePicture} alt="" className='rightBarprofileImg'/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>{user.username}</span>
    </li>
  )
}

export default Online