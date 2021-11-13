import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllProducts = () => {
    const { isLoading } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://floating-inlet-09206.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    if (isLoading) {
        return <div className="preloader"><Spinner animation="border" /></div>
    };
    return (
        <div>
            <Header></Header>
            <div className="page-title">
                <h2>All Products</h2>
            </div>
            <Container>
                <Row className="justify-content-center">
                    {
                        products.map(product => <Col lg={4} md={6} xs={12}
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
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;