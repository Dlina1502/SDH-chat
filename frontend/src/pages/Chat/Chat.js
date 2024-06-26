import React, { useContext } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import LogoutIcon from '@mui/icons-material/Logout';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import SearchTextField from '../../components/Search';
import RecipientList from './components/RecipientList';

const drawerWidth = 370;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            boxSizing: 'border-box',
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
            },
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Chat() {
    const {userChats, isUserChatsLoading} = useContext(ChatContext)
    console.log(userChats)
    const { user, logoutUser } = useContext(AuthContext)
    // const [open, setOpen] = useState(true);
    console.log(user)
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" sx={{ bgcolor: '#ffffff' }}>
                    <Toolbar>
                        <Avatar sx={{ marginLeft: '350px' }} src="" />
                        <Typography
                            component="h1"
                            variant="h6"
                            color="black"
                            noWrap
                            paddingLeft={2}
                        >
                            Luisa
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent"
                    PaperProps={{
                        style: {
                            backgroundColor: '#1976d2',
                        },
                    }}
                >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            px: [1],
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ marginRight: '10px' }} src="" />
                            {user &&
                                <Typography
                                    variant="h6"
                                    color="white"
                                    noWrap
                                >
                                    {user?.name}
                                </Typography>
                            }
                        </Box>
                        <IconButton sx={{ color: 'white' }} onClick={() => logoutUser()} href='/' >
                            <LogoutIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <SearchTextField />
                    <List component="nav" >
                        <RecipientList chats={userChats} userId={user._id} chatsLoading={isUserChatsLoading}/>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        minHeight: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Container sx={{ mt: 12 }}>
                        {/* <Grid container spacing={3}>
                        </Grid> */}
                    </Container>
                    <AppBar position="static" sx={{ bgcolor: '#ffffff', width: '100%', mt: 'auto', height: '80px' }}>
                        <Toolbar sx={{ padding: '10px' }}>
                            <TextField sx={{ margin: 'auto', width: '100%' }} />
                            <IconButton size="large">
                                <SendIcon color="primary" fontSize="medium" />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Box>
        </ThemeProvider>
    );
}