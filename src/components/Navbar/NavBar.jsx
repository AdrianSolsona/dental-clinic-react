import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import "./Navbar.css"
import { Navigator } from '../Navigator/Navigator';


export const NavBar = () => {
    return (
        <>
            <Navbar className='all-nav'>
                <Container>
                    <Navbar.Brand className='link-title'>FACTORDENT</Navbar.Brand>
                    <Nav className="nav-menu">
                    <Navigator ruta={"Home"} destino={"/home"} />
                    <Navigator ruta={"Login"} destino={"/login"} />
                    <Navigator ruta={"Register"} destino={"/register"} />
                    <Navigator ruta={"Treatments"} destino={"/treatments"} />
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
};

