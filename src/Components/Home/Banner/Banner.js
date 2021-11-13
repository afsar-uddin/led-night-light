import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const [bannerSlides, setBannerSlides] = useState([]);
    useEffect(() => {
        fetch('https://floating-inlet-09206.herokuapp.com/banner')
            .then(res => res.json())
            .then(data => setBannerSlides(data))
    }, []);
    return (
        <Container className="banner-slide">
            <Row>
                <Carousel>
                    {
                        bannerSlides.map(bannerSlide => <Carousel.Item
                            key={bannerSlide._id}
                        >
                            <div className="single-slide">
                                <div className="banner-fig">
                                    <img
                                        src={bannerSlide.cover}
                                        alt={bannerSlide.title}
                                    />
                                    <img
                                        src={bannerSlide.cover0}
                                        alt={bannerSlide.title}
                                    />
                                </div>
                                <Carousel.Caption>
                                    <h3>{bannerSlide.title}</h3>
                                    <p>{bannerSlide.shortDsc}</p>
                                    <Link className="link-btn" to="/all-products">View Products</Link>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>)
                    }

                </Carousel>
            </Row>
        </Container>
    );
};

export default Banner;