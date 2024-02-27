import React from 'react'
import './Post.css'
import { MoreVert } from '@mui/icons-material'

const Post = ({post}) => {
    console.log(post)
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
              <div className='postTopleft'>
                <img src="/assets/person/6.jpeg" alt="" className="postProfileImg"/>
                <span className='postUsername'>野島</span>
                <span className='postDate'>5分前</span>
            </div>
            <div className='postTopRight'>
                <MoreVert/>
            </div>
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