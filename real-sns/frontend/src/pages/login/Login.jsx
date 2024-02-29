import React, { useContext, useRef } from 'react'
import './Login.css'
import { loginCall } from '../../ActionCalls';
import { AuthContext } from '../../states/AuthContext';

const Login = () => {


    const email = useRef();
    const password = useRef();
    const {user, isFetching , error , dispatch} = useContext(AuthContext)


    const handleSUbmit = (e) => {
        e.preventDefault();
        // console.log(email.current.value)
        // console.log(password.current.value)
        loginCall(
            {
                email:  email.current.value,  
                password: password.current.value
            },
            dispatch,
        )
    };

    console.log(user);


  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>SNSアプリ</h3>
                <span className='loginDesc'>最低限な機能が揃ったSNSアプリ</span>
            </div>
            <div className='loginRight'>
                <form className='loginBox'   onSubmit={(e) => handleSUbmit((e))}>
                    <p className='loginMsg'>ログインはこちら</p>
                    <input type='email'  className='loginInput' placeholder='e-mailを入力'  required  ref={email}/>
                    <input type='password'  className='loginInput' placeholder='パスワードを入力'  required  minLength={6} ref={password} />
                    <button className='loginButton' type='submit'>ログイン</button>
                    <span className='loginForgot'>パスワードを忘れた方</span>
                    <button className='loginRegisterButton'>アカウントを作成</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login