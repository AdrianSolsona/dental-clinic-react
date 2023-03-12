import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Link to='/register'>Home</Link>
                    <Link to='/home'>Register</Link>
                    <Link to='/login'>Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
};

