

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const ContactForm = () => {


    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        address: '',
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate mobile number to ensure it's numeric
        if (!/^\d+$/.test(formData.mobile)) {
            alert('Please enter valid mobile number');
            return;
        }

        // Display a success alert
        alert(' Submitted successfully!');

        // Reset the form
        setFormData({
            name: '',
            mobile: '',
            address: '',
        });

        // Navigate to the home page
        history.push('/');
    };

    return (
        <Container>
            <h2>Contact Form</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={4}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default ContactForm;






















