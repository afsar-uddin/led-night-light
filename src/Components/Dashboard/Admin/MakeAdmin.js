import React, { useState } from 'react';
import DashboardNav from '../DashboardNav';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        e.preventDefault();
        const user = { email };
        fetch('http://localhost:4000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Role successfully added');
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <DashboardNav></DashboardNav>
            <div>
                <div className="page-title">
                    <h2>Make an admin</h2>
                </div>
                <form className="led-form" onSubmit={handleAdmin}>
                    <input type="email" onBlur={handleOnBlur} name="email" placeholder="Make admin" required />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;