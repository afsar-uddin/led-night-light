import React from 'react';
import DashboardNav from './DashboardNav';
import Footer from '../../Components/Shared/Footer/Footer';

const Payment = () => {
    return (
        <>
            <DashboardNav></DashboardNav>
            <div className="page-title">
                <h2>Make payment</h2>
            </div>
            <div className="payment-detail">
                <h3>Payment option comming soon</h3>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Payment;