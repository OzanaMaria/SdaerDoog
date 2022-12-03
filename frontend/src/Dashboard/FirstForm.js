

import Container from 'react-bootstrap/Container';
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Card, Form } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import backgroundImg from "./../Assets/Images/image.jpg";

export default function Login() {
    const roleRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <Container>
            <Row className='row'>
                <Col className='green'>
                    <h2 className='text-center mb-4'>Let's get to know your book tastes!</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}

                    <Form className="form-container" onSubmit={handleSubmit}>
                        <Form.Group id='credentials'>

                            <Form.Label className='mt-2'>Favorite author</Form.Label>
                            <Form.Control
                                type="text"
                                ref={emailRef}
                                required
                            />

                            <Form.Label className='mt-2'>Favorite genre</Form.Label>
                            <Form.Control
                                type="text"
                                ref={emailRef}
                                required
                            />
                            <Form.Label className='mt-2'>Three books you would recommend</Form.Label>
                            <Form.Control
                                type="text"
                                ref={emailRef}
                                required
                            />
                            <Form.Label className='mt-2'>Three books you read</Form.Label>
                            <Form.Control
                                type="text"
                                ref={emailRef}
                                required
                            />
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