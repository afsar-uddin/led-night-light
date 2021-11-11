import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="light" expand="lg" className="led-header">
            <Container>
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                    <Nav

                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink activeClassName="active" exact to="/">Home</NavLink>
                        <NavLink activeClassName="active" exact to="/all-products">All Products</NavLink>
                        <NavLink activeClassName="active" exact to="/contact">Get in touch</NavLink>
                        <NavLink activeClassName="active" exact to="/dashboard">Dashboard</NavLink>
                        <span>{user?.email && user?.displayName}</span>{user?.email ? <button onClick={logOut}>Logout</button> : <NavLink activeClassName="active" exact to="/login">Login / Register</NavLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;