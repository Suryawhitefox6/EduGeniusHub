import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import userProfileIcon from './icons/userProfileIcon.jpg';
import smartContentCreationIcon from './icons/smartContentCreationIcon.png';
import aiBasedSuggestionsIcon from './icons/aiBasedSuggestionsIcon.png';
import immersiveLearningIcon from './icons/immersiveLearningIcon.jpeg';
import codeWithMeIcon from './icons/codeWithMeIcon.png';
import communityGuidelinesIcon from './icons/communityGuidelinesIcon.png';
import bgImage from './bgImage.jpg';
import Footer from './Footer'; // Import Footer component

const Home = () => {
    return (
        <Box
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: '#fff',
                textAlign: 'center',
                paddingTop: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <Container>
                <Typography variant="h3" component="h1" gutterBottom>
                    Delve into EduGenius Hub
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Where Ideas Meet AI, Transforming How We Learn
                </Typography>
                <Box mt={4}>
                    <Button variant="contained" color="primary" component={Link} to="/join">
                        Join Now
                    </Button>
                    <Button variant="outlined" color="primary" component={Link} to="/features" style={{ marginLeft: '10px' }}>
                        Explore Features
                    </Button>
                    <Button variant="outlined" color="primary" component={Link} to="/learn-more" style={{ marginLeft: '10px' }}>
                        Learn More
                    </Button>
                </Box>
                <Grid container spacing={4} justifyContent="center" style={{ marginTop: '50px' }}>
                    <Grid item>
                        <Card>

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <img src={smartContentCreationIcon} alt="Smart Content Creation" style={{ width: '50px' }} />
                                <Typography variant="h6">Smart Content Creation</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <img src={aiBasedSuggestionsIcon} alt="AI-Based Suggestions" style={{ width: '50px' }} />
                                <Typography variant="h6">AI-Based Suggestions</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <img src={immersiveLearningIcon} alt="Immersive Learning" style={{ width: '50px' }} />
                                <Typography variant="h6">Immersive Learning</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <img src={codeWithMeIcon} alt="Code with Me" style={{ width: '50px' }} />
                                <Typography variant="h6">Code with Me</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <img src={communityGuidelinesIcon} alt="Community Guidelines" style={{ width: '50px' }} />
                                <Typography variant="h6"><Link to="/community-guidelines" style={{ color: 'inherit', textDecoration: 'none' }}>Community Guidelines</Link></Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box mt={5} bgcolor="rgba(255, 255, 255, 0.8)" p={3} borderRadius={8}>
                    <Typography variant="h4" gutterBottom color="textPrimary">
                        Get Started with EduGenius Hub: Your Path to Innovative Learning
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary">
                        1. Sign Up and Create Your Profile
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary">
                        2. Explore the Platform
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary">
                        3. Engage with the Community
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary">
                        4. Start a Project or Join One
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary">
                        5. Utilize AI Tools
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary">
                        6. Collaborate and Learn
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary">
                        7. Track Your Progress
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary">
                        8. Access Resources
                    </Typography>
                </Box>

                <Box mt={5}>
                    <Typography variant="h4" gutterBottom>
                        Contact Information
                    </Typography>
                    <Typography variant="body1">
                        Email: info@edugeniushub.com
                    </Typography>
                    <Typography variant="body1">
                        Phone: +1 234 567 890
                    </Typography>
                    <Typography variant="body1">
                        Address: 123 EduGenius Street, Learning City, Knowledge Country
                    </Typography>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
}

export default Home;
