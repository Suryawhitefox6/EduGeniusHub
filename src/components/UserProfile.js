import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const UserProfile = () => {
    const [profile, setProfile] = useState({
        fullName: '',
        username: '',
        email: '',
        bio: '',
        role: '',
        organization: '',
        location: '',
        experienceLevel: '',
        highestQualification: '',
        projects: '',
        interests: '',
        availability: 'part-time',
        linkedIn: '',
        github: '',
        website: '',
        contactNumber: '',
        achievements: '',
        publications: '',
        recentActivities: '',
        profileVisibility: 'public',
        notificationPreferences: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data before submitting
        console.log(profile);
    };

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h2" gutterBottom>
                    User Profile
                </Typography>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="fullName"
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.fullName}
                                onChange={handleChange}
                            />
                            <TextField
                                name="username"
                                label="Username"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.username}
                                onChange={handleChange}
                            />
                            <TextField
                                name="email"
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.email}
                                onChange={handleChange}
                            />
                            <TextField
                                name="bio"
                                label="Bio"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                value={profile.bio}
                                onChange={handleChange}
                            />
                            <TextField
                                name="role"
                                label="Current Role/Position"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.role}
                                onChange={handleChange}
                            />
                            <TextField
                                name="organization"
                                label="Organization/Institution"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.organization}
                                onChange={handleChange}
                            />
                            <TextField
                                name="location"
                                label="Location (City, Country)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.location}
                                onChange={handleChange}
                            />
                            <TextField
                                name="experienceLevel"
                                label="Experience Level"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.experienceLevel}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" fullWidth margin="normal">
                                <InputLabel>Highest Educational Qualification</InputLabel>
                                <Select
                                    name="highestQualification"
                                    value={profile.highestQualification}
                                    onChange={handleChange}
                                    label="Highest Educational Qualification"
                                >
                                    <MenuItem value="BTech">BTech</MenuItem>
                                    <MenuItem value="MTech">MTech</MenuItem>
                                    <MenuItem value="MBA">MBA</MenuItem>
                                    <MenuItem value="MS">MS</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                name="projects"
                                label="Projects and Contributions"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.projects}
                                onChange={handleChange}
                            />
                            <TextField
                                name="interests"
                                label="Interests and Preferences"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.interests}
                                onChange={handleChange}
                            />
                            <Typography variant="h6" component="h3" gutterBottom>
                                Availability
                            </Typography>
                            <RadioGroup
                                name="availability"
                                value={profile.availability}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="part-time" control={<Radio />} label="Part-time" />
                                <FormControlLabel value="full-time" control={<Radio />} label="Full-time" />
                            </RadioGroup>
                            <TextField
                                name="linkedIn"
                                label="LinkedIn Profile"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.linkedIn}
                                onChange={handleChange}
                            />
                            <TextField
                                name="github"
                                label="GitHub Profile"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.github}
                                onChange={handleChange}
                            />
                            <TextField
                                name="website"
                                label="Personal Website/Portfolio"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.website}
                                onChange={handleChange}
                            />
                            <TextField
                                name="contactNumber"
                                label="Contact Number (Optional)"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.contactNumber}
                                onChange={handleChange}
                            />
                            <TextField
                                name="achievements"
                                label="Achievements"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.achievements}
                                onChange={handleChange}
                            />
                            <TextField
                                name="publications"
                                label="Publications and Research"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.publications}
                                onChange={handleChange}
                            />
                            <TextField
                                name="recentActivities"
                                label="Recent Activities"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.recentActivities}
                                onChange={handleChange}
                            />
                            <FormControl variant="outlined" fullWidth margin="normal">
                                <InputLabel>Profile Visibility</InputLabel>
                                <Select
                                    name="profileVisibility"
                                    value={profile.profileVisibility}
                                    onChange={handleChange}
                                    label="Profile Visibility"
                                >
                                    <MenuItem value="public">Public</MenuItem>
                                    <MenuItem value="private">Private</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                name="notificationPreferences"
                                label="Notification Preferences"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={profile.notificationPreferences}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Box mt={2} textAlign="center">
                        <Button variant="contained" color="primary" type="submit">
                            Save Profile
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
}

export default UserProfile;
