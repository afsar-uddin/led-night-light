import React from 'react';
import { Container, Navbar, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Dashboard from './Dashboard';
import ManageProducts from './ManageProducts';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddNewProduct from '../Dashboard/Admin/AddNewProduct';
import MakeAdmin from '../Dashboard/Admin/MakeAdmin';

const DashboardNav = () => {
    let { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth();

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
                    <Row>
                        <Col>
                            <NavLink to="/">
                                <div>
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div>
                                    {user?.email && <button onClick={logOut}>Logout</button>}
                                </div>
                            </NavLink>
                        </Col>
                        <Col>
                            <Nav
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <NavLink activeClassName="active" exact to="/">Home</NavLink>
                                <NavLink activeClassName="active" exact to="/payment">Pay</NavLink>
                                <NavLink activeClassName="active" exact to="/myorders">My Orders</NavLink>
                                <NavLink activeClassName="active" exact to="/reviews">Review</NavLink>
                                <NavLink activeClassName="active" exact to="/manage-all-orders">Manage all orders</NavLink>
                                {/* <Link to={`${url}`}>Dashboard</Link> <br /> */}

                                {
                                    admin && <span>
                                        <NavLink to={`${url}/manage-products`} activeClassName="active" exact >Manage products</NavLink>
                                        <NavLink to={`${url}/add-new-product`} activeClassName="active" exact to="/add-new-product">Add new product</NavLink>
                                        <NavLink to={`${url}/make-admin`} activeClassName="active" exact to="/make-admin">Make admin</NavLink>
                                    </span>
                                }

                                <NavLink activeClassName="active" exact to="/add-new-review">Add new Review</NavLink>
                            </Nav>
                        </Col>
                    </Row>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll"> */}
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
            <Switch>
                {/* <Route exact path={path}>
                        <Dashboard></Dashboard>
                    </Route> */}
                <AdminRoute path={`${path}/manage-products`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/add-new-product`}>
                    <AddNewProduct></AddNewProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/make-admin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
            </Switch>
        </>
    );
};

export default DashboardNav;