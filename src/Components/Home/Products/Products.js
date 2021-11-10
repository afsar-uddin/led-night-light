import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container className="products-wrapper">
            <Row>
                <Col>
                    <div className="led-title">
                        <h2>Our products</h2>
                    </div>
                </Col>
            </Row>
            <Row md={3} className="justify-content-center">
                {
                    products.slice(4).map(product => <Col
                        id={product._id}
                        className="single-product"
                    >
                        <div className="product-pic">
                            <img src={product.cover} />
                        </div>
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p>{product.shortDsc}</p>
                            <Link to="/products-detail">View detail</Link>
                        </div>

                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Products;