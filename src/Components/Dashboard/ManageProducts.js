import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import DashboardNav from './DashboardNav';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => {
                setManageProducts(data);
            })
    }, []);

    const handleRemoveProduct = id => {
        const proceed = window.confirm("Are you sure delete the product?");
        if (proceed) {
            const url = `http://localhost:4000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingProduct = manageProducts.filter(product => product._id !== id);
                        setManageProducts(remainingProduct)
                    };
                })
        }
    };

    return (
        <>
            <div className="page-title">
                <h2>Manage products</h2>
            </div>
            <div className="manage-products">
                <Container className="orderd-product">
                    <Row md={3} className="justify-content-center">
                        {
                            manageProducts?.map(product => <Col
                                key={product._id}
                            ><Card>
                                    <div className="ordered-product">
                                        <img src={product?.cover} />
                                        <h3>{product?.title}</h3>
                                    </div>
                                    <button onClick={() => handleRemoveProduct(product._id)}>Remove</button>
                                </Card></Col>
                            )}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ManageProducts;