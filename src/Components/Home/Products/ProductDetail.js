import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';


const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();
    const { user } = useAuth();
    const [orderStatus, setOrderStatus] = useState('pending');

    useEffect(() => {
        fetch(`http://localhost:4000/products/${id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data))
    }, []);

    // 
    const proceedToOrder = () => {
        const productName = productDetail.title;
        const cover = productDetail.cover;
        const email = user.email;
        const status = orderStatus;
        const orderedProduct = { title: productName, cover, email, status };
        fetch('http://localhost:4000/orders', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedProduct)
        })
            .then(res => res.json())
            .then(result => {
                alert('Order confirmed, please wait for sipped')
                // console.log(result)
            })
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col md={8}>
                        <Card className="product-detail">
                            <h2>Product Information</h2>
                            <img src={productDetail.cover} />
                            <h3>{productDetail.title}</h3>
                            <p>{productDetail.dsc}</p>
                            {productDetail.price && <p>Price: $ {productDetail.price}</p>}
                            <button onClick={proceedToOrder} className="led-btn">Purchase Now</button>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <h2>User Information</h2>
                            <h3>{user.displayName}</h3>
                            <p>{user.email}</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetail;