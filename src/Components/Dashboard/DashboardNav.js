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
import ManageProducts from './ManageProducts';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddNewProduct from '../Dashboard/Admin/AddNewProduct';
import MakeAdmin from '../Dashboard/Admin/MakeAdmin';
import DashboardHome from './DashboardHome';
import ManageAllOrders from './Admin/ManageAllOrders';

const DashboardNav = () => {
    const { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth();

    return (
        <>
            <Container fluid className="dashboard-head bg-light">
                <Row>
                    <Col>
                        <h2>Dashboard of <span>{user?.displayName}</span></h2>
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
                                    <Link to="/"><button>Back to home</button></Link>
                                </div>
                            </NavLink>
                        </Col>
                    </Row>
                    <Row className="site-nav">
                        <Col>
                            <Nav>
                                <Link activeClassName="active" to={`${url}`}>Dashboard home</Link>
                                {
                                    admin ? <>
                                        <Link activeClassName="active" to={`${url}/manageProducts`} >Manage products</Link>

                                        <Link activeClassName="active" to={`${url}/addNewProduct`} >Add new product</Link>

                                        <NavLink activeClassName="active" to={`${url}/manageAllOrders`}>Manage all orders</NavLink>

                                        <Link to={`${url}/makeAdmin`}>Make admin</Link>
                                    </>
                                        :
                                        <>
                                            <NavLink activeClassName="active" exact to="/">Home</NavLink>
                                            <NavLink activeClassName="active" exact to="/payment">Pay</NavLink>
                                            <NavLink activeClassName="active" exact to="/myorders">My Orders</NavLink>
                                            <NavLink activeClassName="active" exact to="/reviews">Review</NavLink>

                                            <NavLink activeClassName="active" exact to="/add-new-review">Add new Review</NavLink>
                                        </>
                                }
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </Route>
                <Route path={`${path}/addNewProduct`}>
                    <AddNewProduct></AddNewProduct>
                </Route>
                <Route path={`${path}/manageAllOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
            </Switch>
        </>
    );
};

export default DashboardNav;