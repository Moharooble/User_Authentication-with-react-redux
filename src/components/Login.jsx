// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import userData from '../assets/users.json';
import Home from './Home';
import { toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const user = userData.users.find(user => user.email === username && user.password === password);
        if (user) {
            dispatch(login(user));
            toast.success("Successfully login")


            // <Home/>
        } else {
            toast.error("Incorect your login",{    style: {
               
				border: '1px solid #713200',
			  }});
        
        }
    };

    return (
        <div className="container">
            
            <form onSubmit={handleLogin} className="form">
                <span className="header_text">Login</span>
                <input 
                    type="text" 
                    placeholder="Email" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="input"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="input"
                />
                <button type="submit" className="btn_login">Login</button>
            </form>
        </div>
    );
};

export default Login;
