import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AiSandbox = () => {
    return (
        <Container>
            <Box mt={5}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        AI Sandbox: Explore the Frontiers of Artificial Intelligence
                    </Typography>
                    <Box mt={3}>
                        <Typography variant="h6">Hands-on AI Model Exploration</Typography>
                        <Typography variant="body1">
                            Step into the AI Sandbox and gain hands-on experience with a wide range of AI models, from natural language processing and computer vision to reinforcement learning and generative adversarial networks.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Customizable Model Training</Typography>
                        <Typography variant="body1">
                            Go beyond mere observation and take an active role in shaping AI models. The AI Sandbox allows you to customize model architectures, tweak hyperparameters, and train models on your own datasets.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Interactive Data Visualization</Typography>
                        <Typography variant="body1">
                            Unravel the complexities of AI with the AI Sandbox's powerful data visualization tools. Visualize high-dimensional data, interpret model outputs, and gain insights into the inner workings of neural networks through interactive graphs, heat maps, and dynamic visualizations.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Collaborative AI Experimentation</Typography>
                        <Typography variant="body1">
                            Embark on AI explorations alongside fellow learners, instructors, and industry professionals from around the globe. The AI Sandbox fosters a collaborative environment where you can share experiments, exchange ideas, and learn from the diverse perspectives and expertise of the EduGenius Hub community.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Guided Learning Paths and Tutorials</Typography>
                        <Typography variant="body1">
                            Whether you're an AI novice or an experienced practitioner, the AI Sandbox provides guided learning paths and tutorials tailored to your skill level. Follow step-by-step instructions, tackle hands-on exercises, and master AI concepts and techniques at your own pace.
                        </Typography>
                    </Box>
                    <Box mt={5}>
                        <Typography variant="body1">
                            By offering an immersive and interactive AI playground, EduGenius Hub's AI Sandbox empowers learners to transcend theoretical knowledge and gain practical, hands-on experience with cutting-edge AI technologies.
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default AiSandbox;
