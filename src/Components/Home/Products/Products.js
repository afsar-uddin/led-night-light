import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://floating-inlet-09206.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container className="products-wrapper">
            <Row>
                <Col>
                    <div className="sec-title">
                        <h2>Our products</h2>
                    </div>
                </Col>
            </Row>
            <Row md={3} className="justify-content-center">
                {
                    products.slice(0, 6).map(product => <Col lg={4} md={6} xs={12}
                        key={product._id}
                        className="single-product"
                    >
                        <Card>
                            <div className="product-pic">
                                <img src={product.cover} alt={product.title} />
                            </div>
                            <div className="product-info">
                                <h3>{product.title}</h3>
                                <p>{product.shortDsc}</p>
                                <Link className="link-btn" to={`/product-detail/${product._id}`}>View detail</Link>
                            </div>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Products;