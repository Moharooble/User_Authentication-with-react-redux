// src/components/ProfileOverlay.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import '../style/ProfileOverlay.css'; // Create a CSS file for styling
import { handleProfile } from '../features/profile/profileSlice';

const ProfileOverlay = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const {isOpen} = useSelector((state) => state.profile)
    

    const handleLogout = () => {
        dispatch(logout());
        dispatch(handleProfile())
    }

    if(!isOpen) return

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
