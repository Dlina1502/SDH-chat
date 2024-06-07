import React from 'react';
import { Avatar, Divider, ListItemButton, ListItemText } from '@mui/material';
import useFetchRecipients from '../../../hooks/useFetchRecipients'; // Ajusta la ruta de importación según sea necesario

const RecipientList = ({ chats, userId, chatsLoading }) => {
  const { recipientUsers, loading} = useFetchRecipients({ chats, userId });
  console.log(recipientUsers, chats, loading, chatsLoading);
  
  if (loading || chatsLoading) return <p>Loading...</p>;
  if (!recipientUsers || recipientUsers.length === 0) return <p>No users found.</p>;

  return (
    <React.Fragment>
      {recipientUsers.map((user) => (
        <React.Fragment key={user._id}>
          <ListItemButton>
            <Avatar sx={{ marginRight: '10px' }} src={user.avatar || ""} />
            <ListItemText primary={user.name} sx={{ color: 'white' }} />
          </ListItemButton>
          <Divider />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default RecipientList;