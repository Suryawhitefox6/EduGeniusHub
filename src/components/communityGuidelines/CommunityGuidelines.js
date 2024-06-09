import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const CommunityGuidelines = () => {
    return (
        <Container>
            <Box mt={5}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        Community Guidelines
                    </Typography>
                    <Box mt={3}>
                        <Typography variant="h6">Respect and Inclusivity</Typography>
                        <Typography variant="body1">
                            • Treat all members with respect, regardless of background, race, gender, or beliefs.<br/>
                            • Promote an inclusive environment that values diversity of thoughts and perspectives.<br/>
                            • Avoid offensive, discriminatory, or abusive language or behavior.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Collaboration and Knowledge Sharing</Typography>
                        <Typography variant="body1">
                            • Embrace a collaborative mindset and be open to sharing ideas and knowledge.<br/>
                            • Provide constructive feedback and critique in a respectful manner.<br/>
                            • Acknowledge contributions and give credit where it's due.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Innovation and Creativity</Typography>
                        <Typography variant="body1">
                            • Encourage innovative thinking and creative problem-solving approaches.<br/>
                            • Challenge conventional ideas and be open to exploring unconventional solutions.<br/>
                            • Respect intellectual property rights and give proper attribution.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Professionalism and Integrity</Typography>
                        <Typography variant="body1">
                            • Maintain professionalism in all interactions and communications.<br/>
                            • Be honest, transparent, and ethical in your conduct.<br/>
                            • Avoid conflicts of interest and disclose potential biases or affiliations.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Confidentiality and Privacy</Typography>
                        <Typography variant="body1">
                            • Respect the privacy and confidentiality of members and their shared information.<br/>
                            • Do not share or distribute sensitive or proprietary information without consent.<br/>
                            • Comply with applicable data protection and privacy laws.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Community Engagement</Typography>
                        <Typography variant="body1">
                            • Actively participate in discussions, forums, and events.<br/>
                            • Contribute positively to the community's growth and knowledge base.<br/>
                            • Support and encourage fellow members in their endeavors.
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h6">Moderation and Reporting</Typography>
                        <Typography variant="body1">
                            • Report any violations of the community guidelines to the moderation team.<br/>
                            • Moderators reserve the right to remove or edit content that violates the guidelines.<br/>
                            • Persistent or severe violations may result in temporary or permanent suspension.
                        </Typography>
                    </Box>
                    <Box mt={5}>
                        <Typography variant="body1">
                            These guidelines aim to foster a safe, inclusive, and productive environment for collaboration, innovation, and knowledge sharing within the EduGenius Hub community.
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default CommunityGuidelines;
