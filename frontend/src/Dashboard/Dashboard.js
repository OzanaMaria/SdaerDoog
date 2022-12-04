import React from "react";
import { Row } from "react-bootstrap";
import ListCard from "./Card";
import backgroundImg from "./../Assets/Images/image.jpg";
import "./Dashboard.css";

function Dashboard() {
    const books = [
        { title: 'a', description: 'a', photo: backgroundImg },
        { title: 'b', description: 'b', photo: backgroundImg },
        { title: 'c', description: 'c', photo: backgroundImg },
    ]
    const displayCard = () => {


        return books.map((item, index) => (
            <ListCard
                key={index}
                title={item.title}
                description={item.description}
                imgsrc={item.photo}
                listingId={item._id}
            ></ListCard>
        ));
    };

    return (

        <Row className='card-list'>
            {displayCard()}
        </Row>

    );

}

export default Dashboard;