import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {

    return (
        <div className="footer">
            <Container>
                <Row md={2} className="align-items-center">
                    <Col className="copyright">
                        <p>&copy; All right reserved <span>LED Night Light</span></p>
                    </Col>
                    <Col className="social-nav">
                        <Link><FaFacebookSquare /></Link>
                        <Link><FaTwitterSquare /></Link>
                        <Link><FaLinkedin /></Link>
                        <Link><FaInstagramSquare /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;