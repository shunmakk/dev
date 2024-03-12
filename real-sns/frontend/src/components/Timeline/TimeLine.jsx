import React, { useContext, useEffect, useState } from 'react'
import './TimeLine.css'
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from '../../dummyData'
import axios from 'axios';
import { AuthContext } from '../../states/AuthContext';

const TimeLine = ({username}) => {

  const [posts, setPosts] = useState([]);

  const {user} = useContext(AuthContext)


  useEffect(() => {
    const fetchPosts = async () => {
    const responce = username ? await axios.get(`/posts/profile/${username}`) //プロフィールの場合
     : await axios.get(`/posts/timeline/${user._id}`) //ホームの場合
    // console.log(responce)
    setPosts(responce.data)
    }
    fetchPosts();
  },[username, user._id])


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