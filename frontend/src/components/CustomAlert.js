import * as React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';

function CustomAlert({ severity, message, showAlert, setShowAlert }) {
    React.useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showAlert, setShowAlert]);

    if (!showAlert) return null;

    return (
        <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}>
            <Alert severity={severity}>
                <AlertTitle>{severity.charAt(0).toUpperCase() + severity.slice(1)}</AlertTitle>
                {message}
            </Alert>
        </Box>

    );
}

CustomAlert.propTypes = {
    severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
    message: PropTypes.string.isRequired,
    showAlert: PropTypes.bool.isRequired,
    setShowAlert: PropTypes.func.isRequired,
};

export default CustomAlert;