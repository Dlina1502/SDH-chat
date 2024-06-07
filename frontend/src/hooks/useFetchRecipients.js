import { useState, useEffect } from 'react';
import { findUserRequest } from '../services/services';

const useFetchRecipients = ({ chats, userId }) => {
  const [recipientUsers, setRecipientUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipients = async () => {
      try {
        setLoading(true);
        const recipientIds = new Set();
        let chatsList = chats.data;
        chatsList.forEach(chat => {
          chat.participants.forEach(id => {
            if (id !== userId) recipientIds.add(id);
          });
        });

        const userRequests = Array.from(recipientIds).map(id => findUserRequest(id));
        const users = await Promise.all(userRequests);
        setRecipientUsers(users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipients();
    
  }, [chats, userId]);

  return { recipientUsers, loading, error };
};

export default useFetchRecipients;