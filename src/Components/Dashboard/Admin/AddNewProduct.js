import React from 'react';
import { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Admin.css'

const AddNewProduct = () => {

    const productNameRef = useRef();
    const productShortRef = useRef();
    const productImgUrlRef = useRef();
    const productDetailRef = useRef();
    const priceRef = useRef();

    const handleAddProduct = e => {
        e.preventDefault();
        const title = productNameRef.current.value;
        const shortDsc = productShortRef.current.value;
        const cover = productImgUrlRef.current.value;
        const dsc = productDetailRef.current.value;
        const price = priceRef.current.value;
        const newProduct = { title, shortDsc, cover, dsc, price };

        fetch('http://localhost:4000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Data added successfully!');
                    e.target.reset();
                }
            });

    }
    return (
        <>
            <div className="page-title">
                <h2>Add your product</h2>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="add-new-product product-form">
                            <form onSubmit={handleAddProduct} className="led-form">
                                <input type="text" ref={productNameRef} placeholder="Product name" required />
                                <input type="text" ref={productShortRef} placeholder="Product short info" required />
                                <input type="text" ref={productImgUrlRef} placeholder="Product image url" required />
                                <input type="text" ref={priceRef} placeholder="Product price" required />
                                <textarea ref={productDetailRef} cols="20" rows="5" placeholder="Product description" required></textarea>
                                <input className="primary-btn" type="submit" value="Add Product" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};


export default AddNewProduct;