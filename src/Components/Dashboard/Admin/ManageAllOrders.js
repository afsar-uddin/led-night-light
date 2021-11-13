import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
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
        <div>
            <div className="page-title">
                <h2>Manage orders</h2>
            </div>
            <Container className="orderd-product manage-orders">
                <Row className="justify-content-center">
                    {
                        orders?.map(order => <Col lg={4} md={6} xs={12}
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