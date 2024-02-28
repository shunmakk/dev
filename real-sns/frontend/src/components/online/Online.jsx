import React from 'react'

const Online = ({user}) => {

  const PUBLIC_FOLDER =  process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className='rightbarFirend'>
            <div className='rightbarProfileImgContainer'>
              <img src={ PUBLIC_FOLDER + user.profilePicture} alt="" className='rightBarprofileImg'/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>{user.username}</span>
    </li>
  )
}

export default Online