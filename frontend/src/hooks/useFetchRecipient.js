import { useState, useEffect } from 'react';
import { findChatRequest, findUserRequest } from '../services/services';

const useFetchRecipientUser = ({chat, user}) => {
    const [recipientUser, setRecipientUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const recipientId = chat?.participants.find((id) => id !== user._id);

    useEffect(() => {
        const getUser = async () => {
            if(!recipientId) return null;

            const response = await findUserRequest(recipientId);

            if (response.error) {
                return setError(response.message);
            }

            setRecipientUser(response);
        }

        getUser()
    }, []);

    return { recipientUser };
};

export default useFetchRecipientUser;