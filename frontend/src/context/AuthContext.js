import React, { createContext, useCallback, useState } from 'react';
import { registerUserRequest } from '../services/services';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [registerError, setRegisterError] = useState(null)
    const [isRegisterLoading, setIsRegisterLoading] = useState(false)
    const [registerUserData, setRegisterUserData]  = useState({
        name: "",
        nick: "",
    })

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
            localStorage.setItem("User", JSON.stringify(response))
            setUser(response)
            return response
        }
    }, [registerUserData])
    
    return (
        <AuthContext.Provider value={{ user, registerUserData, updateRegisterUser, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
};