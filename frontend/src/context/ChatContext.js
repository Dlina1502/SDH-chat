import React, { createContext, useState, useEffect } from 'react';
import { getUserChatsRequest } from '../services/services';
import {io} from 'socket.io-client';

export const ChatContext = createContext();

export const ChatProvider = ({ children, user }) => {
    // State for storing chat messages
    // const [messages, setMessages] = useState([]);
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    // eslint-disable-next-line
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:3001');
        setSocket(newSocket);

        return () => newSocket.disconnect();
    }, [user]);


    useEffect(() => {
        const fetchUserChats = async () => {
            if(user?._id) {
                setIsUserChatsLoading(true);
                const response = await getUserChatsRequest(user._id);
                setIsUserChatsLoading(false);
                if (response.error) {
                    return response
                }
                setUserChats(response);
            }
        };
        fetchUserChats();
    }, [user]);

    // const addMessage = (message) => {
    //     setMessages([...messages, message]);
    // };

    // const chatContextValue = {
    //     messages,
    //     addMessage,
    // };

    return (
        <ChatContext.Provider value={{userChats, isUserChatsLoading}}>
            {children}
        </ChatContext.Provider>
    );
};