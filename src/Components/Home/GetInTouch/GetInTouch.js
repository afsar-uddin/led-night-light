import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './GetInTouch.css';
import { FaEnvelopeOpenText } from 'react-icons/fa';


const GetInTouch = () => {
    return (
        <div className="getintouch">
            <Container>
                <Row className="align-items-center">
                    <Col md={8}>
                        <h3>Looking for a upcomming LED light?</h3>
                        <p>We are ready to help with any availble product to deliver in your destination.</p>
                        <Link className="link-btn" to="/contact">Get in touch</Link>
                    </Col>
                    <Col md={4} className="contact-icon">
                        <FaEnvelopeOpenText />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GetInTouch;