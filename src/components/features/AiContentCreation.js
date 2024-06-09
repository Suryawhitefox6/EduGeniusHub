import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AiContentCreation = () => {
    return (
        <Container>
            <Box mt={5}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        AI-Powered Content Creation
                    </Typography>
                    <Box mt={3}>
                        <Typography variant="h6">Video and Animation Generation</Typography>
                        <Typography variant="body1">
                            With our cutting-edge AI video generation capabilities, you can quickly create polished, professional-grade videos on any topic imaginable. Simply provide a brief or outline, and our AI algorithms will craft captivating animations, simulations, and visualizations to bring your ideas to life in a visually stunning format.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Interactive Presentations and Slideshows</Typography>
                        <Typography variant="body1">
                            Say goodbye to generic, static presentations. EduGenius Hub's AI-powered presentation tools allow you to craft interactive, multimedia-rich slideshows and presentations that engage your audience and facilitate active learning. Customize layouts, incorporate videos, animations, and interactive elements with ease.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Audio and Captioning</Typography>
                        <Typography variant="body1">
                            Enhance the accessibility and reach of your content with AI-generated audio narration and captioning. Our advanced speech synthesis and transcription technologies ensure flawless audio quality and accurate captions in multiple languages, making your content more inclusive and comprehensible to diverse audiences.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Personalized Content Recommendations</Typography>
                        <Typography variant="body1">
                            EduGenius Hub's AI algorithms continuously learn from user interactions and preferences, enabling it to provide personalized content recommendations tailored to individual learning styles, interests, and proficiency levels. Discover relevant resources, materials, and learning paths that optimally support your educational journey.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Smart Content Curation and Optimization</Typography>
                        <Typography variant="body1">
                            Let AI simplify the process of curating and optimizing your content for maximum impact. Our intelligent algorithms analyze existing materials, identify gaps or areas for improvement, and suggest enhancements or additional resources to create comprehensive, well-rounded learning experiences.
                        </Typography>
                    </Box>
                    <Box mt={5}>
                        <Typography variant="body1">
                            Join the AI-powered content creation revolution and unlock new possibilities for engaging, personalized, and efficient educational content production with EduGenius Hub.
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default AiContentCreation;
