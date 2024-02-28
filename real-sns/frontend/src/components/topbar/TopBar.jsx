import { Search , Chat, Notifications} from '@mui/icons-material'
import './TopBar.css'
import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='topbarcontainer'>
        <div className='topbarleft'> 
            <Link to="/" style={{textDecoration: "none"}}>
            <span className='logo'>SNSアプリ</span>
            </Link>
        </div>
        <div className='topbarCenter'>
            <div className='searchbar'>
                <Search className='searchIcon'/>
                <input 
                type="text" 
                className='searchInput' 
                placeholder='探しものは何ですか？'/>
            </div>
        </div>
        <div className='topbarRight'>
         <div className='topbarItemsIcons'>
            <div className='topbarIconItem'>
                <Chat/>
                <span className='topbarIconBadge'>1</span>
            </div>
            <div className='topbarIconItem'>
                <Notifications/>
                <span className='topbarIconBadge'>2</span>
            </div>
            <img  src="/assets/person/4.jpeg"  alt="" className='topbarImg' />
            </div>
        </div>
        
    </div>
  )
}

export default TopBar