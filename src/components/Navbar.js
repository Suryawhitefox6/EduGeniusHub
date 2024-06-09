import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    EduGenius Hub
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/features">Explore</Button>
                <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
                <Button color="inherit" component={Link} to="/profile">User Profile</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
