import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './Reviews.css';


// const Rating = require('react-rating');
const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://floating-inlet-09206.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="reviews-wrapper">
            <div className="sec-title">
                <h2>Our Reviews</h2>
            </div>
            <Container>
                <Row className="justify-content-center">
                    {
                        reviews.map(review => <Col className="single-review col-lg-4 col-md-6 col-xs-12"
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