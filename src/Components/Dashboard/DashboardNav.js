import React from 'react';
import { Container, Navbar, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Dashboard.css';

const DashboardNav = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Container fluid className="dashboard-head bg-light">
                <Row>
                    <Col>
                        <h2>Dashboard of {user?.displayName}</h2>
                    </Col>
                </Row>
            </Container>
            <Navbar bg="light" expand="lg" className="led-header dashboard-nav">
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
                            <NavLink activeClassName="active" exact to="/payment">Pay</NavLink>
                            <NavLink activeClassName="active" exact to="/myorders">My Orders</NavLink>
                            <NavLink activeClassName="active" exact to="/review">Review</NavLink>
                            <NavLink activeClassName="active" exact to="/manage-all-orders">Manage all orders</NavLink>
                            <NavLink activeClassName="active" exact to="/add-new-product">Add new product</NavLink>
                            <NavLink activeClassName="active" exact to="/add-new-review">Add new Review</NavLink>
                            <span>{user?.email && user?.displayName} {user?.email && <button onClick={logOut}>Logout</button>}</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default DashboardNav;