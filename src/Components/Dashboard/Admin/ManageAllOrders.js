import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import DashboardNav from '../DashboardNav';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState();

    useEffect(() => {
        const url = `http://localhost:4000/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [user]);

    const handleRemoveOrder = id => {
        const proceed = window.confirm("Are you sure delete the order?");
        if (proceed) {
            const url = `http://localhost:4000/orders/${id}`;
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
            <Container className="orderd-product">
                <Row md={3} className="justify-content-center">
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
                                <div className="btn-status update-btn">
                                    <Link to={`/order/update/${order._id}`}><button className="primary-btn">Update status</button></Link>
                                </div>
                            </Card></Col>
                        )}
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrders;