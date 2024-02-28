import React, { useState } from 'react'
import './Post.css'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData'

const Post = ({post}) => {

    const PUBLIC_FOLDER =  process.env.REACT_APP_PUBLIC_FOLDER;

    // const user = Users.filter(user => user.id ===  1);
    // console.log(user[0].username)

    const [like, setLike] = useState(post.like);
    const [isliked, setIsliked] = useState(false)

    const handleLike = () => {
        setLike(isliked ? like -1 : like + 1);
        setIsliked(!isliked)
    }

    



  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
              <div className='postTopleft'>
                <img src={PUBLIC_FOLDER + Users.filter(user => user.id ===  post.id)[0].profilePicture} alt="" className="postProfileImg"/>
                <span className='postUsername'>{ Users.filter(user => user.id ===  post.id)[0].username}</span>
                <span className='postDate'>{post.date}</span>
            </div>
            <div className='postTopRight'>
                <MoreVert/>
            </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post.desc}</span>
                <img src={PUBLIC_FOLDER + post.photo} alt="" className='postImg'/>
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