import React, { useEffect, useState } from 'react'
import './TimeLine.css'
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from '../../dummyData'
import axios from 'axios';

const TimeLine = () => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
    const responce =  await axios.get("/posts/timeline/65d76e837c22e4960fc01cc7")
    // console.log(responce)
    setPosts(responce.data)
    }
    fetchPosts();
  },[])


  return (
    <div className='TimeLine'>
      <div className='TimeLinewrapper'>
        <Share/>
        {posts.map((post) => (
  <Post key={post._id} post={post} />
))}
      </div>
    </div>
  )
}

export default TimeLine