import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { SlLike } from "react-icons/sl"
import { SlDislike } from "react-icons/sl"
export default function ListingPage() {
    const params = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/dashboard')
            .then((res) => res.json())
            .then((result) => {
                setBooks(result);
            });
    }, []);
    const booksRecommend = books.filter((book) =>
        book.id === parseInt(params.id)
    );

    console.log(booksRecommend.length > 0);

    return (
        <Col>
            <Row>
                {booksRecommend.length > 0 &&
                    <LazyLoadImage className="card-photo" src={booksRecommend[0].photo}
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