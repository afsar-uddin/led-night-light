import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'
import DashboardNav from '../Dashboard/DashboardNav';
import Footer from '../Shared/Footer/Footer';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState();

    useEffect(() => {
        const url = `https://floating-inlet-09206.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [user]);

    const handleRemoveOrder = id => {
        const proceed = window.confirm("Are you sure delete the order?");
        if (proceed) {
            const url = `https://floating-inlet-09206.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder)
                    };
                })
        }
    };

    return (
        <>
            <DashboardNav></DashboardNav>
            <div className="page-title">
                <h2>My ordered products</h2>
            </div>
            <Container className="orderd-product user-ordered-products">
                <Row className="justify-content-center">
                    {
                        orders?.map(order => order?.email === user?.email && <Col lg={4} md={6} xs={12}
                            key={order._id}
                        ><Card>
                                <div className="ordered-product">
                                    <img src={order?.cover} alt={order?.title} />
                                    <h3>{order?.title}</h3>
                                </div>
                                <div className="btn-status">
                                    <button onClick={() => handleRemoveOrder(order._id)}>Remove</button>
                                    <span>Status: {order?.status}</span>
                                </div>
                            </Card></Col>
                        )}
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default MyOrders;