
import { TbBooks } from "react-icons/tb"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

function BasicExample() {
    return (
        <Navbar className='nav' >
            <Container >
                <Navbar.Brand href="/"><TbBooks className='icons' /></Navbar.Brand>
                <Nav>

                    <Nav.Link href="/profile">My profile</Nav.Link>
                    <Nav.Link href="/books">My books</Nav.Link>

                    <Nav.Link href="/signOut">Sign Out</Nav.Link>

                </Nav>


            </Container>
        </Navbar>
    );
}

export default BasicExample;