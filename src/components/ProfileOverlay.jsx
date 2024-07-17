// src/components/ProfileOverlay.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import './ProfileOverlay.css'; // Create a CSS file for styling

const ProfileOverlay = ({ onClose,setProfileOpen}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    console.log(user)

    const handleLogout = () => {
        dispatch(logout());
        setProfileOpen(false)
    }

    return (
        <div className="profile-overlay">
            {user ? (
                <div className="user-info">
                    <img className='profile_img' src={user.photo} alt=""  id="user_profile" srcSet="" />
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
            {/* <button className="close-button" onClick={onClose}>Close</button> */}
        </div>
    );
};

export default ProfileOverlay;
