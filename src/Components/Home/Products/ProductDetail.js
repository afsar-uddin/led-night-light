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
        fetch(`https://floating-inlet-09206.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data))
    }, [id]);

    // 
    const proceedToOrder = () => {
        const productName = productDetail.title;
        const cover = productDetail.cover;
        const email = user.email;
        const status = orderStatus;
        const orderedProduct = { title: productName, cover, email, status };
        fetch('https://floating-inlet-09206.herokuapp.com/orders', {
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
        <div className="product-detail-wrapper">
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={8} md={12}>
                        <Card className="product-detail">
                            <h2>Product Information</h2>
                            <img src={productDetail.cover} alt={productDetail.title} />
                            <h3>{productDetail.title}</h3>
                            <p className="price">Price: $ {productDetail.price}</p>
                            <p>{productDetail.dsc}</p>
                        </Card>
                    </Col>
                    <Col lg={4} md={12}>
                        <Card>
                            <h2>User Information</h2>
                            <div className="shipping-info">
                                <form className="led-form">
                                    <input type="text" name="name" value={user?.displayName} />
                                    <input type="email" name="name" value={user?.email} />
                                    <input type="text" name="phonenumber" placeholder="Your phone number" />
                                    <textarea name="address" cols="15" rows="5" placeholder="Shipping address"></textarea>
                                </form>
                                <button onClick={proceedToOrder} className="led-btn">Purchase Now</button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetail;