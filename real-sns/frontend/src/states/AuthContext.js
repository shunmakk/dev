//最初のユーザー状態を定義

import {  createContext, useReducer } from "react"
import { AuthReducer } from "./AuthReducer";

const initialState = {
    user: null,
    isFetching: false,
    error:   false
}


//状態をグローバルに管理する =上のinitialstateをどこでも使えるようにする
export const AuthContext = createContext(initialState);

//認証の状態をどこでも提供できるようにする
export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
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