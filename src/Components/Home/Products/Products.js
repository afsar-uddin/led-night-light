import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
                    <div className="sec-title">
                        <h2>Our products</h2>
                    </div>
                </Col>
            </Row>
            <Row md={3} className="justify-content-center">
                {
                    products.slice(0, 6).map(product => <Col
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