import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import smartContentCreationIcon from './icons/smartContentCreationIcon.png';
import immersiveLearningIcon from './icons/immersiveLearningIcon.jpeg';
import aiBasedSuggestionsIcon from './icons/aiBasedSuggestionsIcon.png';
import codeWithMeIcon from './icons/codeWithMeIcon.png';
import aiSandboxIcon from './icons/aiSandboxIcon.png';

const Features = () => {
    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h3" gutterBottom>
                    Features of EduGenius Hub
                </Typography>
                <Grid container spacing={4} justifyContent="center" style={{ marginTop: '50px' }}>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <img src={smartContentCreationIcon} alt="AI-Powered Content Creation" style={{ width: '50px' }} />
                                <Typography variant="h6">AI-Powered Content Creation</Typography>
                                <Button variant="contained" color="primary" component={Link} to="/features/ai-content-creation">
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <img src={immersiveLearningIcon} alt="Immersive Learning" style={{ width: '50px' }} />
                                <Typography variant="h6">Immersive Learning</Typography>
                                <Button variant="contained" color="primary" component={Link} to="/features/immersive-learning">
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <img src={aiBasedSuggestionsIcon} alt="AI-Based Personalized Learning Recommendations" style={{ width: '50px' }} />
                                <Typography variant="h6">AI-Based Personalized Learning Recommendations</Typography>
                                <Button variant="contained" color="primary" component={Link} to="/features/ai-learning-recommendations">
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <img src={codeWithMeIcon} alt="Code with Me" style={{ width: '50px' }} />
                                <Typography variant="h6">Code with Me</Typography>
                                <Button variant="contained" color="primary" component={Link} to="/features/code-with-me">
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <img src={aiSandboxIcon} alt="AI Sandbox" style={{ width: '50px' }} />
                                <Typography variant="h6">AI Sandbox</Typography>
                                <Button variant="contained" color="primary" component={Link} to="/features/ai-sandbox">
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Features;
