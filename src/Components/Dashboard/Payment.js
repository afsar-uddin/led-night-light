import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardNav from './DashboardNav';

const Payment = () => {
    return (
        <div>
            <DashboardNav></DashboardNav>
            <div className="page-title">
                <h2>Make payment</h2>
            </div>
        </div>
    );
};

export default Payment;