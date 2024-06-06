import React, { createContext, useCallback, useEffect, useState } from 'react';
import { loginUserRequest, registerUserRequest } from '../services/services';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [registerError, setRegisterError] = useState(null)
    const [isRegisterLoading, setIsRegisterLoading] = useState(false)
    const [registerUserData, setRegisterUserData]  = useState({
        name: "",
        nick: "",
    })
    const [loginUserData, setLoginUserData]  = useState({
        nick: ""
    })

    useEffect(() => {
        const user = localStorage.getItem("User")
        setUser(JSON.parse(user))
    }, [])

    //Register

    const updateRegisterUser = useCallback((data) => {
        setRegisterUserData(data)
    }, [])
    
    const registerUser = useCallback(async() => {
        setIsRegisterLoading(true)
        const response = await registerUserRequest(registerUserData)
        setIsRegisterLoading(false)
        if(response.error){
            return response
        }else{
            localStorage.setItem("User", JSON.stringify(response.data))
            setUser(response.data)
            return response
        }
    }, [registerUserData])

    //Login

    const loginUser = useCallback(async() => {

        const response = await loginUserRequest(loginUserData)
        if(response.error){
            return response
        }else{
            localStorage.setItem("User", JSON.stringify(response.data))
            setUser(response.data)
            return response
        }
    }, [loginUserData])

    const updateLoginUser = useCallback((data) => {
        setLoginUserData(data)
    }, [])

    //Logout 

    const logoutUser = useCallback(() => {
        localStorage.removeItem("User")
        setUser(null)
    }, [])
    
    return (
        <AuthContext.Provider value={{ user, registerUserData, loginUserData, updateRegisterUser, registerUser, logoutUser, loginUser, updateLoginUser }}>
            {children}
        </AuthContext.Provider>
    );
};