import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="led-header">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                    <Nav

                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink activeClassName="active" exact to="/">Home</NavLink>
                        <NavLink activeClassName="active" exact to="/contact">Get in touch</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;