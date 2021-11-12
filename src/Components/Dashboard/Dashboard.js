import React from 'react';
import DashboardNav from './DashboardNav';
import Footer from '../Shared/Footer/Footer';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { admin } = useAuth()
    return (
        <>
            <DashboardNav></DashboardNav>
            {admin ? '' :
                <div className="dashboard-content">
                    <h2>Dashbord content comming soon</h2>
                </div>
            }
            <Footer></Footer>
        </>
    );
};

export default Dashboard;