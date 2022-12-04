

import Container from 'react-bootstrap/Container';
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Card, Form } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Select from 'react-select';
import backgroundImg from "./../Assets/Images/image.jpg";
import "../Auth/SignUp.css";
export default function Login() {
    const emailRef = useRef();
    const [error, setError] = useState("");
    const options = [
        { value: 'Gabriel Garcia Marquez', label: 'Gabriel Garcia Marquez' },
        { value: 'Stephen King', label: 'Stephen King' },
        { value: 'Feodor Dostoievski', label: 'Feodor Dostoievski' }
    ]
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        navigate("/dashboard")
    }
    return (
        <Container>
            <Row className='first-display-card'>
                <Col className='green'>
                    <h2 className='text-center mb-4'>Let's get to know your book tastes!</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}

                    <Form className="form-container" onSubmit={handleSubmit}>
                        <Form.Group id='credentials'>

                            <Form.Label className='mt-2'>Favorite author</Form.Label>
                            <Select className="select-options" isMulti options={options} />



                            <Form.Label className='mt-2'>Favorite genre</Form.Label>
                            <Form.Select>
                                <option >Select option</option>
                                <option>Romance</option>
                                <option >Fiction</option>
                                <option>Adventure</option>
                            </Form.Select>

                            <Form.Label className='mt-2'>Three books you would recommend</Form.Label>
                            <Select className="select-options" isMulti options={options} />

                            <Form.Label className='mt-2'>Three books you read</Form.Label>
                            <Select className="select-options" isMulti options={options} />

                        </Form.Group>

                        <Button className='mt-2' id='register'
                            variant="light"
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col className='img-container'><Image className="background-img" src={backgroundImg} /></Col>
            </Row>

        </Container>
    );
}