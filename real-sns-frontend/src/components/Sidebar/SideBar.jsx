import Home from '../../pages/home/Home'
import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <ul className='sidebarList'>
               <li className='sidebarListItem'>
                   <Home  className="sidebarIcon" />
                   <span className='sidebarListItemText'>ホーム</span>
               </li>
               {/* <li className='sidebarListItem'>
                   <Home  className="sidebarIcon" />
                   <span className='sidebarListItemText'>ホーム</span>
               </li>
               <li className='sidebarListItem'>
                   <Home  className="sidebarIcon" />
                   <span className='sidebarListItemText'>ホーム</span>
               </li>
               <li className='sidebarListItem'>
                   <Home  className="sidebarIcon" />
                   <span className='sidebarListItemText'>ホーム</span>
               </li>
               <li className='sidebarListItem'>
                   <Home  className="sidebarIcon" />
                   <span className='sidebarListItemText'>ホーム</span>
               </li>
               <li className='sidebarListItem'>
                   <Home  className="sidebarIcon" />
                   <span className='sidebarListItemText'>ホーム</span>
               </li> */}
            </ul>
        </div>
    </div>
  )
}

export default SideBar