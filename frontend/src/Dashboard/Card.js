import React from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function BasicExample(props) {
    return (
        <Card style={{ width: '20vw' }}>
            <div className="overflow">
                <LazyLoadImage className="card-photo" src={props.imgsrc}
                    width={350} height={450}
                    alt="Image Alt"
                    effect="blur"
                />
            </div>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.publishingHouse}</Card.Text>

                <Col >
                    <Link to={{ pathname: `/listingPage/${props.listingId}` }}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Col>

            </Card.Body>
        </Card>
    );
}

export default BasicExample;