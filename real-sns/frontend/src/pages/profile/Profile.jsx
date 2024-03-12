import React from 'react'
import TopBar from '../../components/topbar/TopBar'
import SideBar from '../../components/Sidebar/SideBar'
import TimeLine from '../../components/Timeline/TimeLine'
import Rightbar from '../../components/Rightbar/Rightbar'
import './/Profile.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Profile = () => {


  const PUBLIC_FOLDER =  process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username;


  useEffect(() => {
    const fetchUsers = async () => {
    const responce =  await axios.get(`/users?username=${username}`)
   console.log(responce)
    setUser(responce.data)
    }
    fetchUsers();
  },[])


  return (
    <>
   <TopBar/>
    <div className='profile'>
    <SideBar/>
    <div className='profileRight'>
    <div className='profileRightTop'>
        <div className='profileCover'>
            <img src={user.coverPicture ||   PUBLIC_FOLDER + "/post/3.jpeg"}  alt="" className='profilecoverImg' />
            <img  src={user.profilePicture ? PUBLIC_FOLDER  + user.profilePicture : PUBLIC_FOLDER  +  "/person/noAvatar1.png"} alt="" className='profileUserImg' />
        </div>
        <div className='profileInfo'>
            <h4 className='profileInfoName'>{user.username}</h4>
            <span className='profileInfoDesc'>{user.desc}</span>
        </div>
     </div>
    <div className='profileRightBottom'>
     <TimeLine username={username} />
      <Rightbar user={user}/>
      </div>
    </div>
    </div>
   </>
  )
}

export default Profile