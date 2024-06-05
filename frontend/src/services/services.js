import axios from 'axios';

const baseUrl = 'http://localhost:5000/api';

export async function registerUserRequest(user) {
    try {
        const response = await axios.post(`${baseUrl}/user/register`, user);
        let message = response.data.message
        console.log(response.data.message)
        return { message };
    } catch (error) {
        let message = error.message;
        if (error.response && error.response.data) {
            // Si hay una respuesta y tiene un campo de datos, usa eso para el mensaje
            message = error.response.data.error;
        }
        return { error: true, message };
    }
}
