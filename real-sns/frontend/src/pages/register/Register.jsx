import React from 'react'
import './Register.css'
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();
    

    const handleSUbmit =  async   (e) => {
        e.preventDefault();

        //パスワードと確認用パスワードはあっているか
        if(password.current.value !== passwordConfirmation.current.value){
            passwordConfirmation.current.setCustomValidity("パスワードが違います")
        }else{
            try{
            //registerApiを叩く
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            await axios.post("/auth/register" , user);
            navigate("/login");
            }
            catch(err){
                console.log(err);
            }
        }
    };



  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>SNSアプリ</h3>
                <span className='loginDesc'>最低限な機能が揃ったSNSアプリ</span>
            </div>
            <div className='loginRight'>
                <form className='loginBox' onSubmit={(e) => handleSUbmit((e))}>
                    <p className='loginMsg'>新規登録はこちら</p>
                    <input type='text'  className='loginInput' placeholder='ユーザー名'  required  ref={username}/>
                    <input type='email'  className='loginInput' placeholder='メールアドレス' required ref={email}  />
                    <input type='password'  className='loginInput' placeholder='パスワードを入力'  required minLength={6} ref={password} />
                    <input type='password'  className='loginInput' placeholder='パスワードを確認' required minLength={6} ref={passwordConfirmation}  />
                    <button className='loginButton' type='submit'>サインアップ</button>
                    <button className='loginRegisterButton'>ログイン</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;