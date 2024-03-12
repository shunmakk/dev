import React, { useContext, useRef } from 'react'
import './Share.css'
import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import { AuthContext } from '../../states/AuthContext';
import axios from 'axios';

const Share = () => {


  const PUBLIC_FOLDER =  process.env.REACT_APP_PUBLIC_FOLDER;


  const {user} = useContext(AuthContext)

  const desc = useRef();

  const handlesubmit =  async (e) => {
    e.preventDefault();

    const confirm = window.confirm('投稿してもよろしいでしょうか?')

    if(confirm){const newPost = {
        userId: user._id,
        desc:    desc.current.value
    };

    try{
        await axios.post("/posts", newPost);
        window.location.reload();
    }catch(err){
        console.log(err)
    }}
  };



  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='shareTop'>
                <img src={ user.profilePicture  ?   PUBLIC_FOLDER + user.profilePicture  :  PUBLIC_FOLDER + "/person/noAvatar1.png" || `/profile/${user.profilePicture}` } alt="" className='shareProfileImg'/>
                <input 
                type="text"
                className='shareInput'
                placeholder='今思っていること、考えていることを呟いてみよう'
                ref={desc}
                />
            </div>
            <hr className="shareHr"/>
            <form className='shareButtons' onSubmit={(e) => handlesubmit(e)}>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <Image  className='shareIcon' htmlColor='blue' />
                        <span className='shareOptionText'>写真</span>
                    </div>
                </div>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <Gif  className='shareIcon' htmlColor='hotpink' />
                        <span className='shareOptionText'>Gif</span>
                    </div>
                </div>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <Face  className='shareIcon' htmlColor='green' />
                        <span className='shareOptionText'>気持ち</span>
                    </div>
                </div>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <Analytics  className='shareIcon'  htmlColor='red'/>
                        <span className='shareOptionText'>投票</span>
                    </div>
                </div>
                <button className='shareButton' type="submit">投稿</button>
            </form>
        </div>
    </div>
  )
}

export default Share