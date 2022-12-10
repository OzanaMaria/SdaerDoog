import React from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Card.css";


function BasicExample(props) {
    return (
        <Card style={{ width: '20vw' }}>
            <div className="overflow">
                <Card.Img variant="top" src={props.imgsrc} />
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