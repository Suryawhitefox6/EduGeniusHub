import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            py={3}
            bgcolor="#333"
            color="white"
            textAlign="center"
            position="relative"
            bottom={0}
            width="100%"
        >
            <Typography variant="body1">
                © {new Date().getFullYear()} EduGenius Hub. All Rights Reserved.
            </Typography>
            <Typography variant="body2">
                <Link href="/terms" color="inherit" underline="hover">Terms of Service</Link> |
                <Link href="/privacy" color="inherit" underline="hover" style={{ marginLeft: '10px' }}>Privacy Policy</Link>
            </Typography>
        </Box>
    );
}

export default Footer;
