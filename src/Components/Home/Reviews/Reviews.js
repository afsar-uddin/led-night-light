import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './Reviews.css';


// const Rating = require('react-rating');
const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="reviews-wrapper">
            <div className="sec-title">
                <h2>Our Reviews</h2>
            </div>
            <Container>
                <Row md={3} className="justify-content-center">
                    {
                        reviews.map(review => <Col className="single-review"
                            key={review._id}
                        >
                            <Card>
                                <h3>{review.name}</h3>
                                <p> {review.comments}</p>
                                <Rating
                                    initialRating={review.rating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly
                                />
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;