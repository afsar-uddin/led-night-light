import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import GetInTouch from './GetInTouch/GetInTouch';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <GetInTouch></GetInTouch>
            <Footer></Footer>
        </>
    );
};

export default Home;