import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const CodeWithMe = () => {
    return (
        <Container>
            <Box mt={5}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        Code with Me: Collaborative Coding Reimagined
                    </Typography>
                    <Box mt={3}>
                        <Typography variant="h6">Real-Time Code Editing and Sharing</Typography>
                        <Typography variant="body1">
                            Code with Me enables real-time code editing and sharing, allowing multiple collaborators to work simultaneously on the same codebase. Watch as lines of code appear, merge, and evolve in real-time.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Integrated Video Conferencing</Typography>
                        <Typography variant="body1">
                            Collaborate face-to-face with your team through Code with Me's integrated video conferencing capabilities. Share your screen, discuss challenges, and exchange ideas as if you were working side-by-side.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">AI-Powered Code Analysis and Suggestions</Typography>
                        <Typography variant="body1">
                            Leverage the power of artificial intelligence to enhance your coding experience. Code with Me's AI-powered code analysis tools provide real-time feedback, error detection, and intelligent suggestions.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Project Management and Version Control</Typography>
                        <Typography variant="body1">
                            Keep your collaborative coding projects organized and on track with Code with Me's integrated project management and version control tools. Assign tasks, set milestones, track progress, and maintain a detailed history of code changes.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Live Coding Sessions and Pair Programming</Typography>
                        <Typography variant="body1">
                            Participate in live coding sessions or engage in pair programming with experienced developers, instructors, or peers. Learn from their expertise, gain insights into their problem-solving approaches, and receive valuable feedback on your coding techniques in real-time.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Code Playgrounds and Challenges</Typography>
                        <Typography variant="body1">
                            Sharpen your coding skills by tackling Code with Me's interactive coding playgrounds and challenges. Collaborate with others to solve complex problems, engage in friendly competitions, and unlock achievement badges as you level up your coding prowess.
                        </Typography>
                    </Box>
                    <Box mt={5}>
                        <Typography variant="body1">
                            With Code with Me, EduGenius Hub is revolutionizing the way we learn, collaborate, and create software, fostering a vibrant coding community that empowers learners to reach new heights of innovation and mastery.
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default CodeWithMe;
