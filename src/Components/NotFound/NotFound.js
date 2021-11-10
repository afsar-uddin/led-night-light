import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404 Not found</h2>
            <h4>Please back to <Link to="/" className="link-btn">Home</Link></h4>
        </div>
    );
};

export default NotFound;