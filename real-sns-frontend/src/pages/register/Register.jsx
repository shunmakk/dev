import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>SNSアプリ</h3>
                <span className='loginDesc'>最低限な機能が揃ったSNSアプリ</span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <p className='loginMsg'>新規登録はこちら</p>
                    <input type='text'  className='loginInput' placeholder='ユーザー名'  />
                    <input type='text'  className='loginInput' placeholder='メールアドレス'  />
                    <input type='text'  className='loginInput' placeholder='パスワードを入力'  />
                    <input type='text'  className='loginInput' placeholder='パスワードを確認'  />
                    <button className='loginButton'>サインアップ</button>
                    <button className='loginRegisterButton'>ログイン</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;