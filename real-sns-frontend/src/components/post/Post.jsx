import React from 'react'
import './Post.css'
import { MoreVert } from '@mui/icons-material'

const Post = () => {
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <img src="/assets/person/6.jpeg" alt="" classname="postProfileImg"/>
                <span className='postUsername'>野島</span>
                <span className='postDate'>5分前</span>
            </div>
            <div className='postRight'>
                <MoreVert/>
            </div>
            <div className='postCenter'>
                <span className='postText'>SNS嫌い</span>
                <img src="/assets/post/1.jpeg" alt="" className='postImg'/>
            </div>
            <div className='postButtom'>
                <div className='postButtonleft'>
                    <img src="/assets/heart.png" alt=""  className="likeIcon"/>
                    <span className='postlikeCounter'>5人がいいね押しました</span>
                </div>
                <div className='postButtonright'>
                  
                    <span className='postCommentText'>4件のコメント</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post;