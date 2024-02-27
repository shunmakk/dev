import React from 'react'
import TopBar from '../../components/topbar/TopBar'
import SideBar from '../../components/Sidebar/SideBar'
import TimeLine from '../../components/Timeline/TimeLine'
import Rightbar from '../../components/Rightbar/Rightbar'
import './/Profile.css'

const Profile = () => {
  return (
    <>
   <TopBar/>
    <div className='profile'>
    <SideBar/>
    <div className='profileRight'>
    <div className='profileRightTop'>
        <div className='profileCover'>
            <img src="assets/post/3.jpeg"  alt="" className='profilecoverImg' />
            <img  src='assets/person/2.jpeg' alt="" className='profileUserImg' />
        </div>
        <div className='profileInfo'>
            <h4 className='profileInfoName'>kajiさん</h4>
            <span className='profileInfoDesc'>Reactエンジニアになりたい!</span>
        </div>
     </div>
    <div className='profileRightBottom'>
     <TimeLine/>
      <Rightbar profile/>
      </div>
    </div>
    </div>
   </>
  )
}

export default Profile