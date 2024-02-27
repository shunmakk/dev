import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>SNSアプリ</h3>
                <span className='loginDesc'>最低限な機能が揃ったSNSアプリ</span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <p className='loginMsg'>ログインはこちら</p>
                    <input type='text'  className='loginInput' placeholder='e-mailを入力'  />
                    <input type='text'  className='loginInput' placeholder='パスワードを入力'  />
                    <button className='loginButton'>ログイン</button>
                    <span className='loginForgot'>パスワードを忘れた方</span>
                    <button className='loginRegisterButton'>アカウントを作成</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login