import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = form.name ? "" : "This field is required.";
        tempErrors.email = form.email ? "" : "This field is required.";
        if (form.email) {
            const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            tempErrors.email = emailPattern.test(form.email) ? "" : "Email is not valid.";
        }
        tempErrors.message = form.message ? "" : "This field is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(form);
            // Here you would typically handle the form submission, e.g., send it to an API endpoint
        }
    };

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Contact Us
                </Typography>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        name="name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={form.name}
                        onChange={handleChange}
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={form.email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />
                    <TextField
                        name="message"
                        label="Message"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        error={Boolean(errors.message)}
                        helperText={errors.message}
                    />
                    <Box mt={2}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
}

export default ContactUs;
