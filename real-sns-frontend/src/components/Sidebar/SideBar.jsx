import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import React from 'react'
import './SideBar.css'


const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarwrap'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <Home className='sidebarIcon' />
            <span className='sidebarListItemText'>ホーム</span>
          </li>
          <li className='sidebarListItem'>
            <Search className='sidebarIcon' />
            <span className='sidebarListItemText'>検索</span>
          </li>
          <li className='sidebarListItem'>
            <Notifications className='sidebarIcon' />
            <span className='sidebarListItemText'>通知</span>
          </li>
          <li className='sidebarListItem'>
            <MessageRounded className='sidebarIcon' />
            <span className='sidebarListItemText'>メッセージ</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>ブックマーク</span>
          </li>
          <li className='sidebarListItem'>
            <Person className='sidebarIcon' />
            <span className='sidebarListItemText'>プロフィール</span>
          </li>
          <li className='sidebarListItem'>
            <Settings className='sidebarIcon' />
            <span className='sidebarListItemText'>設定</span>
          </li>
        </ul>
        <hr  className='sidebarHr'/>
        <ul className='sidebarfriendList'>
          <li className='sidebarfriend'>
            <img src="/assets/person/2.jpeg" alt="" className='sidebarfriendimg'/>
            <span className='sidebarfriendname'>ジェイク</span>
          </li>
          <li className='sidebarfriend'>
            <img src="/assets/person/5.jpeg" alt="" className='sidebarfriendimg'/>
            <span className='sidebarfriendname'>ケリー</span>
          </li>
          <li className='sidebarfriend'>
            <img src="/assets/person/4.jpeg" alt="" className='sidebarfriendimg'/>
            <span className='sidebarfriendname'>ルイス</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar