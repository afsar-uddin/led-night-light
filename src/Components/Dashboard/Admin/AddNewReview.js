import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import DashboardNav from '../DashboardNav';

const AddNewReview = () => {
    const { user } = useAuth()

    const reviewerName = useRef();
    const reviewerComment = useRef();
    const reviewerRating = useRef();

    const handleAddReview = e => {
        e.preventDefault();
        const name = reviewerName.current.value;
        const comments = reviewerComment.current.value;
        const rating = reviewerRating.current.value;
        const newProduct = { name, comments, rating };

        fetch('https://floating-inlet-09206.herokuapp.com/reviews', {
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
                                <input type="text" value={user.displayName} ref={reviewerName} placeholder="Your name" required />
                                <input type="text" ref={reviewerRating} placeholder="Rating in numeric value" required />
                                <textarea ref={reviewerComment} cols="20" rows="5" placeholder="Your comment" required></textarea>
                                <input type="submit" value="Add Product" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AddNewReview;