import React from 'react';
import { Container, Typography, Box, Button, TextField, Paper } from '@mui/material';

const Join = () => {
    return (
        <Container>
            <Box mt={5}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        Join EduGenius Hub
                    </Typography>
                    <Box mt={3}>
                        <Typography variant="body1" gutterBottom>
                            Become a part of EduGenius Hub and unlock a world of possibilities in education and learning. Sign up today and start your journey towards innovative, personalized, and immersive learning experiences.
                        </Typography>
                        <Box mt={3}>
                            <TextField
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type="password"
                            />
                            <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                                Sign Up
                            </Button>
                        </Box>
                        <Box mt={3}>
                            <Typography variant="body2">
                                Already have an account? <a href="/login">Log in</a>
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default Join;
