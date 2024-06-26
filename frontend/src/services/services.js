import axios from 'axios';

const baseUrl = 'http://localhost:5000/api';

export async function registerUserRequest(user) {
    try {
        const response = await axios.post(`${baseUrl}/user/register`, user);
        let message = response.data.message
        let data = response.data.data
        console.log(response.data.message)
        return { message, data };
    } catch (error) {
        let message = error.message;
        if (error.response && error.response.data) {

            message = error.response.data.error;
        }
        return { error: true, message };
    }
}

export async function loginUserRequest(user) {
    try {
        const response = await axios.post(`${baseUrl}/user/login`, user);
        let message = response.data.message
        let data = response.data.data
        console.log(response.data.message)
        return { message, data };
    } catch (error) {
        let message = error.message;
        if (error.response && error.response.data) {

            message = error.response.data.error;
        }
        return { error: true, message };
    }
}

export async function findUserRequest(id) {
    try {
        const response = await axios.get(`${baseUrl}/user/find/${id}`);
        let data = response.data
        return data ;
    } catch (error) {
        let message = error.message;
        if (error.response && error.response.data) {

            message = error.response.data.error;
        }
        return { error: true, message };
    }
}

//Chats 
export async function getUserChatsRequest(id) {
    try {
        const response = await axios.get(`${baseUrl}/chat/${id}`);
        let data = response.data
        return { data };
    } catch (error) {
        let message = error.message;
        if (error.response && error.response.data) {

            message = error.response.data.error;
        }
        return { error: true, message };
    }
}

export async function findChatRequest(firstId, secondId) {
    try {
        const response = await axios.get(`${baseUrl}/chat/find/${firstId}/${secondId}`);
        let data = response.data
        return { data };
    } catch (error) {
        let message = error.message;
        if (error.response && error.response.data) {

            message = error.response.data.error;
        }
        return { error: true, message };
    }
}
