import React from 'react'
import './TimeLine.css'
import Share from '../share/Share'
import Post from '../post/Post'

const TimeLine = () => {
  return (
    <div className='TimeLine'>
      <div className='TimeLinewrapper'>
        <Share/>
       <Post/>
      </div>
    </div>
  )
}

export default TimeLine