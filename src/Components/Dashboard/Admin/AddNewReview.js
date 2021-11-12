import React, { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DashboardNav from '../DashboardNav';

const AddNewReview = () => {

    const reviewerName = useRef();
    const reviewerComment = useRef();
    const reviewerRating = useRef();

    const handleAddReview = e => {
        e.preventDefault();
        const name = reviewerName.current.value;
        const comments = reviewerComment.current.value;
        const rating = reviewerRating.current.value;
        const newProduct = { name, comments, rating };

        fetch('http://localhost:4000/reviews', {
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
            <DashboardNav></DashboardNav>
            <div className="page-title">
                <h2>Add new review</h2>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="add-new-product product-form">
                            <form onSubmit={handleAddReview} className="led-form">
                                <input type="text" ref={reviewerName} placeholder="Your name" required />
                                <input type="text" ref={reviewerRating} placeholder="Rating in numeric value" required />
                                <textarea ref={reviewerComment} cols="20" rows="5" placeholder="Your comment" required></textarea>
                                <input type="submit" value="Add Product" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddNewReview;