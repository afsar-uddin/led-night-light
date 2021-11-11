import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import DashboardNav from '../Dashboard/DashboardNav';
import './MyOrders.css'

const MyOrders = () => {
    const { user, isLoading } = useAuth();
    const [orders, setOrders] = useState();

    useEffect(() => {
        const url = `http://localhost:4000/myorders?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [user]);

    const handleRemoveOrder = id => {
        const proceed = window.confirm("Are you sure delete the order?");
        if (proceed) {
            const url = `http://localhost:4000/myorders/${id}`;
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
        <div>
            <DashboardNav></DashboardNav>
            <div className="page-title">
                <Container>
                    <Row>
                        <Col>
                            <h2>My all ordered products</h2>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className="orderd-product">
                <Row md={3}>
                    {
                        orders?.map(order => <Col
                            key={order._id}
                        ><Card>
                                <div className="ordered-product">
                                    <img src={order?.cover} />
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
        </div>
    );
};

export default MyOrders;