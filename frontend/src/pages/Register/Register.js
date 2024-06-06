import React, { useCallback, useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomAlert from '../../components/CustomAlert';
import { AuthContext } from '../../context/AuthContext';

const defaultTheme = createTheme({
    palette: {
        background: {
            default: '#f5f5f5'
        }
    }
});

export default function SignUp() {
    const { registerUserData, updateRegisterUser, registerUser } = useContext(AuthContext)
    const [showAlert, setShowAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState("")
    const [severityAlert, setSeverityAlert] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!registerUserData.nick || !registerUserData.name) {
            setSeverityAlert("error");
            setMessageAlert("All fields are required");
            setShowAlert(true)
            return;
        } else {
            const response = await registerUser();

            if (response && response.error) {
                setSeverityAlert("error")
                console.log(response)
                setMessageAlert(response.message)
            } else {
                setSeverityAlert("success")
                console.log(response)
                setMessageAlert(response.message)
            }
            setShowAlert(true)
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        updateRegisterUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}
            >
                <CustomAlert severity={severityAlert} message={messageAlert} showAlert={showAlert} setShowAlert={setShowAlert} />

                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            bgcolor: 'background.paper',
                            borderRadius: 2,
                            p: 2,
                            m: 'auto',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <PersonOutlineOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="nick"
                                label="Nick name"
                                id="nick"
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="name"
                                label="Name"
                                id="name"
                                onChange={handleInputChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        {"Go to Sign in"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>

        </ThemeProvider>
    );
}