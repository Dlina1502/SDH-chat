import * as React from 'react';
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
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 360;

const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <Avatar sx={{ marginRight: '10px' }} src="" />
            <ListItemText primary="Luisa" sx={{ color: 'white' }} />
        </ListItemButton>
        <Divider />
        <ListItemButton>
            <Avatar sx={{ marginRight: '10px' }} src="" />
            <ListItemText primary="Marta" sx={{ color: 'white' }} />
        </ListItemButton>
        <Divider />
    </React.Fragment>
);


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
    const [open, setOpen] = React.useState(true);

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
                            backgroundColor: '#3f51b5',
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
                            <Typography
                                variant="h6"
                                color="white"
                                noWrap
                            >
                                Chat
                            </Typography>
                        </Box>
                        <IconButton color="inherit">
                            <LogoutIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav" >
                        {mainListItems}
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
                        <Toolbar>
                            <TextField />
                        </Toolbar>
                    </AppBar>
                </Box>
            </Box>
        </ThemeProvider>
    );
}