import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ListCard from "./Card";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
    const location = useLocation();
    const [books, setBooks] = useState([]);

    // console.log(location.state.genre);
    useEffect(() => {
        fetch('http://localhost:3000/dashboard')
            .then((res) => res.json())
            .then((result) => {
                setBooks(result);
            });
    }, []);
    const firstRecommandation = books.map(function (book) {
        if (book.genre === location.state.genre && book.author !== location.state.author)
            return {
                id: book.id,
                title: book.title,
                author: book.author,
                genre: book.genre,
                publishingHouse: book.publishingHouse,
                photo: book.photo
            }
        if (book.genre !== location.state.genre && book.author === location.state.author)
            return {
                id: book.id,
                title: book.title,
                author: book.author,
                genre: book.genre,
                publishingHouse: book.publishingHouse,
                photo: book.photo
            }
    });
    const removeUndefined = firstRecommandation.filter(element => {
        return element !== undefined;
    })
    const displayCard = () => {
        {

            return removeUndefined != undefined && removeUndefined.map((item, index) => (
                <ListCard
                    key={index}
                    title={item.title}
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