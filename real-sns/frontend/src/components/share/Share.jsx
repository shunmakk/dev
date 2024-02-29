import React from 'react'
import './Share.css'
import { Analytics, Face, Gif, Image } from '@mui/icons-material'

const Share = () => {


  const PUBLIC_FOLDER =  process.env.REACT_APP_PUBLIC_FOLDER;



  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='shareTop'>
                <img src={PUBLIC_FOLDER  +  "/person/noAvatar1.png"} alt="" className='shareProfileImg'/>
                <input 
                type="text"
                className='shareInput'
                placeholder='今思っていること、考えていることを呟いてみよう'
                />
            </div>
            <hr className="shareHr"/>
            <div className='shareButtons'>
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
                <button className='shareButton'>投稿</button>
            </div>
        </div>
    </div>
  )
}

export default Share