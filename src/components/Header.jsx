// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileOverlay from './ProfileOverlay';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleProfile } from '../features/profile/profileSlice';

const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const {isOpen} = useSelector((state) => state.profile)
    const dispatch = useDispatch();
    const handleProfileOpen = () => {
        dispatch(handleProfile())
    }



    // const toggleProfile = () => {
    //     setProfileOpen(!isProfileOpen);
    // };

    if(!user) return
    return (
        <header>
            <nav className='navbar'>
                <span>LOGO</span>
                <div className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                </div>
                {/* <button onClick={toggleProfile}>Profile</button> */}
                <img  onClick={handleProfileOpen} className='profile_img' src={user.photo} alt=""  id="user_profile" srcSet="" />

            </nav>
        </header>
    );
};

export default Header;
