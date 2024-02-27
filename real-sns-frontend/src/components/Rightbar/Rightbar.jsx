import React from 'react'
import './Rightbar.css'

const Rightbar = () => {
  return (
    <div className='Rightbar'>
      <div className='rightbarwrapper'>
        <div  className='eventContainer'>
          <img src='assets/star.png' alt="" className='starImg'  />
          <span className='eventText'><b>フォロワー限定</b>イベント</span>
        </div>
        <img src='assets/ad.jpeg' alt="" className='eventImg' />
        <h4 className='rightbarTitle'>オンラインの友達</h4>
        <ul className='rightbarFirendList'>
          <li className='rightbarFirend'>
            <div className='rightbarProfileImgContainer'>
              <img src="assets/person/6.jpeg" alt="" className='rightBarprofileImg'/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>小林</span>
          </li>
          <li className='rightbarFirend'>
            <div className='rightbarProfileImgContainer'>
              <img src="assets/person/4.jpeg" alt="" className='rightBarprofileImg'/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>吉井</span>
          </li>
        </ul>
        <p className='promotionTitle'>プロモーション広告</p>
        <img  
        src="assets/promotion/promotion1.jpeg" 
        alt="" 
        className='rightbarPromotionImg' />
        <p className='promotionName'>ショッピング</p>
        <img  
        src="assets/promotion/promotion2.jpeg" 
        alt="" 
        className='rightbarPromotionImg' />
        <p className='promotionName'>カーショップ</p>
        <img  
        src="assets/promotion/promotion3.jpeg" 
        alt="" 
        className='rightbarPromotionImg' />
        <p className='promotionName'>PJC合同会社</p>
      </div>
    </div>
  )
}

export default Rightbar