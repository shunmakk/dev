import React from 'react'
import './TimeLine.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from '../../dummyData'

const TimeLine = () => {
  return (
    <div className='TimeLine'>
      <div className='TimeLinewrapper'>
        <Share/>
       {Posts.map((post) => (
        <Post post={post} key={post.id}/>
       ))}
      </div>
    </div>
  )
}

export default TimeLine