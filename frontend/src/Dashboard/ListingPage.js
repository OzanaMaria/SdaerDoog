import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { SlLike } from "react-icons/sl"
import { SlDislike } from "react-icons/sl"
import axios from 'axios';
export default function ListingPage() {
    const params = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8888/book?id=" + parseInt(params.id))
                        .then(res => {
                           setBooks(res.data)
                        })
                        .catch(() => {
                               console.log("Error retrieving data!");
                        });
    }, []);

    console.log(parseInt(params.id))

    return (
        <Col>
            <Row>
                {<LazyLoadImage className="card-photo" src={books.photo}
                        width={350} height={450}
                        alt="Image Alt"
                        effect="blur"
                    />
                }
            </Row>
            <Row>
                <Col><SlLike className='icons' /></Col>
                <Col><SlDislike className='icons' /></Col>

            </Row>
        </Col>


    );

}