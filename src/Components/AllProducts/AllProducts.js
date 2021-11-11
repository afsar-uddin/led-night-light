import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <Header></Header>
            <Container>
                <Row md="3" className="justify-content-center">
                    {
                        products.map(product => <Col
                            id={product._id}
                            className="single-product"
                        >
                            <Card>
                                <div className="product-pic">
                                    <img src={product.cover} />
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
        </div>
    );
};

export default AllProducts;