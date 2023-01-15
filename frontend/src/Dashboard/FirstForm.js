import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Alert, Button, Card, Form } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Select from 'react-select';
import backgroundImg from "./../Assets/Images/image.jpg";
import "../Auth/SignUp.css";
import axios from 'axios';
export default function Login() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8888/books")
                        .then(res => {
                           setBooks(res.data)
                        })
                        .catch(() => {
                               console.log("Error retrieving data!");
                        });
    }, []);
    const [error, setError] = useState("");
    const authors = books.map(function (book) {
        return { value: book.author, label: book.author }
    });

    const booksRecommend = books.map(function (book) {
        return { value: book.name, label: book.name }
    });

    const booksRead = books.map(function (book) {
        return { value: book.name, label: book.name }
    });
    const genre = books.map(function (book) {
        return book.genre
    });
    const removeDuplicatesGenre = [...new Set(genre)];

    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const removeDuplicatesAuthors = getUniqueListBy(authors, 'value')
    const navigate = useNavigate();
    const [input, setInput] = useState({
        author: '',
        genre: '',
        booksRecommend: '',
        booksRead: '',
    })

    function handleChange(e) {
        const { name, value } = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value,
            }
        })
    }
    function onDataChange(value, action) {
        setInput(prevInput => {
            return {
                ...prevInput,
                [action.name]: value,
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const newInput = {
            author: input.author,
            genre: input.genre,
            booksRecommend: input.booksRecommend,
            booksRead: input.booksRead,
        }
        console.log(newInput.genre)
        navigate(
            "/dashboard/" + newInput.genre, { state: newInput }
        )
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

                            <Select className="select-options" isMulti options={removeDuplicatesAuthors} onChange={onDataChange} name="author" />

                            <Form.Label>Genre</Form.Label>
                            <Form.Select required onChange={handleChange} name="genre" >
                                {
                                    removeDuplicatesGenre.map(chosenGenre =>
                                        <option value={chosenGenre}>{chosenGenre}</option>
                                    )
                                }

                            </Form.Select>
                            <Form.Label className='mt-2'>Three books you would recommend</Form.Label>
                            <Select className="select-options" isMulti options={booksRecommend} onChange={onDataChange} name="booksRecommend" />

                            <Form.Label className='mt-2'>Three books you read</Form.Label>
                            <Select className="select-options" isMulti options={booksRead} onChange={onDataChange} name="booksRead" />

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

        </Container >
    );
}