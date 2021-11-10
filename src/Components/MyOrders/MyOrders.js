import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

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

    return (
        <div>
            <Header></Header>
            <Container>
                <Row md={3}>
                    {
                        orders?.map(order => <Col
                            key={order._id}
                        ><Card>
                                <img src={order?.cover} />
                                <h3>{order?.title}</h3>
                            </Card></Col>
                        )}
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;