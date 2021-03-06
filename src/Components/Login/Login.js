import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import './Login.css';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleUserSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleLogin = () => {
        signInWithGoogle(location, history)
    }
    return (
        <>
            <Header></Header>
            <div className="login-register bg-light">
                <h2>Login here</h2>
                <form onSubmit={handleUserSubmit}>
                    <input type="email" onChange={handleOnChange} placeholder="Your email" name="email" required />
                    <input type="password" onChange={handleOnChange} placeholder="Your password" name="password" required />
                    <input type="submit" className="led-btn" value="Login" />
                </form>
                {authError && <p className="authError">{authError === 'Firebase: Error (auth/wrong-password).' ? 'Wrong password, check again' : authError}</p>}
                <p>Don't you have account? Register <Link className="link" to="/register">Here</Link></p>
                <div className="google-login text-center">
                    <span>Or</span>
                    <button className="led-btn" onClick={handleGoogleLogin}><FaGoogle /> Google Login</button>
                </div>
            </div>
        </>
    );
};

export default Login;