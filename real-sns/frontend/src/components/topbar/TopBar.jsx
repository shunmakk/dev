import { Search , Chat, Notifications} from '@mui/icons-material'
import './TopBar.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../states/AuthContext'

const TopBar = () => {

 const {user} = useContext(AuthContext);

 const PUBLIC_FOLDER =  process.env.REACT_APP_PUBLIC_FOLDER;

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
            <Link to={`/profile/${user.username}`}>
            <img
               src={user?.profilePicture ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar1.png"}
                alt=""
               className='topbarImg'
            />
            </Link>
</div>
 </div>
        
 </div>
  )
}

export default TopBar