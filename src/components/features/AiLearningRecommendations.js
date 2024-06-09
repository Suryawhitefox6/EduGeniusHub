import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AiLearningRecommendations = () => {
    return (
        <Container>
            <Box mt={5}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        AI-Based Personalized Learning Recommendations
                    </Typography>
                    <Box mt={3}>
                        <Typography variant="h6">Intelligent Learning Path Curation</Typography>
                        <Typography variant="body1">
                            Our advanced AI algorithms analyze your learning behaviors, proficiency levels, and engagement patterns to curate a personalized learning path that optimizes your educational journey.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Adaptive Content Recommendations</Typography>
                        <Typography variant="body1">
                            EduGenius Hub's AI-driven recommendation engine continuously suggests educational resources, materials, and activities that align with your unique interests, learning objectives, and areas for improvement.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Intelligent Skill Gap Analysis</Typography>
                        <Typography variant="body1">
                            Struggling with a particular concept or subject area? Our AI-based skill gap analysis identifies your areas of weakness and provides targeted recommendations for remedial resources, practice exercises, and alternative explanations to help you overcome those hurdles.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Peer Collaboration Matching</Typography>
                        <Typography variant="body1">
                            Learn more effectively by connecting with like-minded peers who share similar learning goals and preferences. EduGenius Hub's AI-powered matching algorithms pair you with compatible study partners, project collaborators, or discussion groups.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Real-Time Performance Tracking</Typography>
                        <Typography variant="body1">
                            Gain valuable insights into your learning progress with real-time performance tracking powered by AI. Visualize your strengths, weaknesses, and growth over time, enabling you to make informed decisions about your learning strategies.
                        </Typography>
                    </Box>
                    <Box mt={5}>
                        <Typography variant="body1">
                            With EduGenius Hub's AI-based personalized learning recommendations, you'll embark on a tailored educational journey that maximizes your potential, accelerates your progress, and ensures a truly engaging and rewarding learning experience.
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default AiLearningRecommendations;
