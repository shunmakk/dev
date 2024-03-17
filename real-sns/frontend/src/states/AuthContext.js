//最初のユーザー状態を定義

import {  createContext, useEffect, useReducer } from "react"
import { AuthReducer } from "./AuthReducer";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    // user: {
    //     _id: "65d76e837c22e4960fc01cc7",
    //     username:"kajikaji",
    //     email: "kaji12@icloud.com",
    //     password:"aaaaaaaa",
    //     profilePicture: "/person/4.jpeg",
    //     coverPicture: "",
    //     followers: [],
    //     followings: [],
    //      isAdmin: false

    // },
    isFetching: false,
    error:   false
}


//状態をグローバルに管理する =上のinitialstateをどこでも使えるようにする
export const AuthContext = createContext(initialState);

//認証の状態をどこでも提供できるようにする
export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //ローカルストレージに保存
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])



    return(
        <AuthContext.Provider value={{
            user:  state.user,
            isFetching:  state.isFetching,
            error:  state.error,
            dispatch
        }}
        >
        {children}
        </AuthContext.Provider>
    )
}