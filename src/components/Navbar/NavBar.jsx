import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


export const NavBar = () => {
    return (
        <>
            <Navbar className='all-nav'>
                <Container>
                    <Navbar.Brand className='link-title'>FACTORDENT</Navbar.Brand>
                    <Nav className="nav-menu">
                    <Link className='link-name' to='/home'>Home</Link>
                    <Link className='link-name' to='/register'>Register</Link>
                    <Link className='link-name' to='/login'>Login</Link>
                    <Link className='link-name' to='/treatments'>Treatments</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
};

