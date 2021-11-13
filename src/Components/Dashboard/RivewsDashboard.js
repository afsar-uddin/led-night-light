import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import DashboardNav from './DashboardNav';
import Rating from 'react-rating';
import Footer from '../Shared/Footer/Footer';

const RivewsDashboard = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <DashboardNav></DashboardNav>
            <div className="page-title">
                <h2>All reviews</h2>
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
            <Footer></Footer>
        </div>
    );
};

export default RivewsDashboard;