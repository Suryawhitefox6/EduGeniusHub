import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const ImmersiveLearning = () => {
    return (
        <Container>
            <Box mt={5}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        Immersive Learning
                    </Typography>
                    <Box mt={3}>
                        <Typography variant="h6">Virtual and Augmented Reality Simulations</Typography>
                        <Typography variant="body1">
                            Step into richly detailed virtual worlds and augmented landscapes that blur the lines between education and reality. Our VR and AR simulations allow you to explore complex systems, historical events, scientific phenomena, and even hypothetical scenarios with unparalleled depth and realism.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Interactive 3D Modeling and Visualization</Typography>
                        <Typography variant="body1">
                            Dive into the realm of 3D modeling and visualization, where abstract ideas and intricate structures take tangible form. Manipulate and dissect 3D models, explore cross-sections, and interact with dynamic visualizations to gain a comprehensive understanding of even the most complex subjects.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Gamified Learning Environments</Typography>
                        <Typography variant="body1">
                            Embrace the power of gamification to make learning not just engaging but downright addictive. EduGenius Hub's gamified learning environments seamlessly blend educational content with game mechanics, challenges, and rewards, transforming the learning process into an immersive and rewarding adventure.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Collaborative Virtual Classrooms</Typography>
                        <Typography variant="body1">
                            Experience the future of remote learning by stepping into our collaborative virtual classrooms. These shared immersive spaces allow you to interact with instructors and peers as if you were physically present, fostering dynamic discussions, group activities, and hands-on projects.
                        </Typography>
                    </Box>
                    <Box mt={5}>
                        <Typography variant="body1">
                            With EduGenius Hub's immersive learning technologies, you'll embark on a transformative journey that redefines the boundaries of education, making learning not just informative but truly unforgettable.
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default ImmersiveLearning;
