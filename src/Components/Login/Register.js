import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './Login.css';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData)
        setLoginData(newLoginData)
    }
    const handleUserSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <>
            <Header></Header>
            <div className="login-register bg-light">
                <h2>Register here</h2>
                <form onSubmit={handleUserSubmit}>
                    <input type="text" onBlur={handleOnBlur} placeholder="Your name" name="name" />
                    <input type="email" onBlur={handleOnBlur} placeholder="Your email" name="email" />
                    <input type="password" onBlur={handleOnBlur} placeholder="Your password" name="password" />
                    <input type="password" onBlur={handleOnBlur} placeholder="Confirm your password" name="password2" />
                    <input type="submit" className="led-btn" value="Register" />
                </form>
                <p>Already have account? Login <Link className="link" to="/login">Here</Link></p>
            </div>
        </>
    );
};

export default Register;