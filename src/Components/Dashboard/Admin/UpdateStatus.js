import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import DashboardNav from '../DashboardNav';

const UpdateStatus = () => {
    const [status, setStetus] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:4000/orders/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setStetus(data))
    }, []);

    const handleStatusChange = e => {
        const presentStatus = { status: e.target.value, title: status.title };
        setStetus(presentStatus)
    };

    const handleUpadeStatus = e => {
        const url = `http://localhost:4000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("updated successfully");
                    setStetus({})
                    window.location = '/manage-all-orders';
                }
            });

        e.preventDefault();
    };

    return (
        <>
            <DashboardNav></DashboardNav>
            <div className="status-wrapper">
                <div className="page-title"><h2>Manage your order status(Pending/Shipped)</h2></div>
                <div className="order-status-title"><h3> Status update for : {status?.title}</h3></div>
                <form onSubmit={handleUpadeStatus}>
                    <input type="text" onChange={handleStatusChange} placeholder="Update status" value={status?.status || ''} />
                    <input className="primary-btn" type="submit" value="Update" />
                </form>
            </div>
        </>
    );
};

export default UpdateStatus;