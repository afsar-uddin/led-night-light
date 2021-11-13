import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../../Components/Shared/Footer/Footer'
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Contact = () => {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <div className="preloader"><Spinner animation="border" /></div>
    };
    return (
        <div>
            <Header></Header>
            <div>
                <div className="page-title">
                    <h2>Get In Touch</h2>
                </div>
                <form className="led-form">
                    <input type="text" placeholder="Your name" required />
                    <input type="email" placeholder="Your email" required />
                    <textarea cols="20" rows="5" placeholder="Your comment" required></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;