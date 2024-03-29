import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ListCard from "./Card";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import axios from 'axios';

function Dashboard() {
    const location = useLocation();
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
    const displayCard = () => {
        {

            return books.map((item, index) => (
                <ListCard
                    key={index}
                    title={item.name}
                    publishingHouse={item.publishingHouse}
                    imgsrc={item.photo}
                    listingId={item.id}
                ></ListCard>
            ));
        }
    };

    return (

        <Row className='card-list'>
            {displayCard()}
        </Row>

    );

}

export default Dashboard;