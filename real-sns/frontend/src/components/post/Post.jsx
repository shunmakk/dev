import React, { useState,useEffect, useContext } from 'react'
import axios from 'axios'
import './Post.css'
import { MoreVert } from '@mui/icons-material'
// import { Users } from '../../dummyData'
import {format} from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../states/AuthContext';


const Post = ({post}) => {

    const PUBLIC_FOLDER =  process.env.REACT_APP_PUBLIC_FOLDER;

    // const user = Users.filter(user => user.id ===  1);
    // console.log(user[0].username)

    const [like, setLike] = useState(post.likes.length);
    const [isliked, setIsliked] = useState(false)

    const [user, setUser] = useState({});

    const {user: currentUser} = useContext(AuthContext)


  useEffect(() => {
    const fetchUsers = async () => {
    const responce =  await axios.get(`/users?userId=${post.userId}`)
   console.log(responce)
    setUser(responce.data)
    }
    fetchUsers();
  },[post.userId])



    const handleLike = async () => {
        try{
          //いいねのAPIを叩いていく
          await axios.put(`/posts/${post._id}/like`, {userId: currentUser._id})
        }
        catch(err){
          console.log(err)
        }

        setLike(isliked ? like - 1 : like + 1);
        setIsliked(!isliked);
    }

    



  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
              <div className='postTopleft'>
                <Link to={`/profile/${user.username}`}>
                <img src={ user.profilePicture  ?   PUBLIC_FOLDER + user.profilePicture  :  PUBLIC_FOLDER + "/person/noAvatar1.png" || `/profile/${user.profilePicture}` } alt="" className="postProfileImg"/>
                </Link>
                <span className='postUsername'>{ user.username}</span>
                <span className='postDate'>{format(post.createdAt)}</span>
            </div>
            <div className='postTopRight'>
                <MoreVert/>
            </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post.desc}</span>
                <img src={PUBLIC_FOLDER + post.img} alt="" className='postImg'/>
            </div>
            <div className='postButtom'>
                <div className='postButtonleft'>
                    <img src={PUBLIC_FOLDER  + "/heart.png"} alt=""  className="likeIcon"  onClick={() => handleLike()}   />
                    <span className='postlikeCounter'>{like}がいいね押しました</span>
                </div>
                <div className='postButtonright'>
                    <span className='postCommentText'>{post.comment}のコメント</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post;