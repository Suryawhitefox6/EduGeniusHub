import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const LearnMore = () => {
    return (
        <Container>
            <Box mt={5}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        Learn More About EduGenius Hub
                    </Typography>
                    <Box mt={3}>
                        <Typography variant="body1">
                            EduGenius Hub is at the forefront of educational innovation, harnessing the power of artificial intelligence and immersive technologies to revolutionize the way we learn and teach. Our platform offers a diverse range of tools and features designed to enhance the educational experience for learners, educators, and institutions alike.
                        </Typography>
                        <Box mt={3}>
                            <Typography variant="h6">AI-Powered Content Creation</Typography>
                            <Typography variant="body1">
                                Unleash the power of AI to effortlessly create high-quality, engaging educational content tailored to your specific needs. From video generation to interactive presentations and personalized content recommendations, EduGenius Hub's AI tools streamline content creation and distribution.
                            </Typography>
                        </Box>
                        <Box mt={3}>
                            <Typography variant="h6">Immersive Learning</Typography>
                            <Typography variant="body1">
                                Experience the future of learning with our immersive technologies. Dive into virtual and augmented reality simulations, interactive 3D modeling, gamified learning environments, and collaborative virtual classrooms that make learning engaging and unforgettable.
                            </Typography>
                        </Box>
                        <Box mt={3}>
                            <Typography variant="h6">AI-Based Personalized Learning Recommendations</Typography>
                            <Typography variant="body1">
                                Our AI algorithms provide personalized, adaptive learning recommendations tailored to your individual needs and preferences. Enjoy a customized educational journey that maximizes your potential and ensures continuous growth.
                            </Typography>
                        </Box>
                        <Box mt={3}>
                            <Typography variant="h6">Code with Me</Typography>
                            <Typography variant="body1">
                                Collaborate in real-time with our revolutionary coding platform. Engage in live coding sessions, pair programming, and collaborative projects with peers and industry professionals, all while leveraging AI-powered code analysis and project management tools.
                            </Typography>
                        </Box>
                        <Box mt={3}>
                            <Typography variant="h6">AI Sandbox</Typography>
                            <Typography variant="body1">
                                Explore the frontiers of AI in our AI Sandbox. Gain hands-on experience with various AI models, customize and train your own models, visualize data interactively, and collaborate with a global community of learners and experts.
                            </Typography>
                        </Box>
                        <Box mt={5}>
                            <Typography variant="body1">
                                Join EduGenius Hub today and become part of a community dedicated to advancing education through innovation, collaboration, and cutting-edge technologies.
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default LearnMore;
