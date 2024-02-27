import React from 'react'
import TopBar from '../../components/topbar/TopBar'
import SideBar from '../../components/Sidebar/SideBar'
import TimeLine from '../../components/Timeline/TimeLine'
import Rightbar from '../../components/Rightbar/Rightbar'
import './Home.css'

const Home = () => {
  return (
   <>
   <TopBar/>
    <div className='homeContainer'>
    <SideBar/>
   <TimeLine/>
    <Rightbar/>
    </div>
   </>
  )
}

export default Home