// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import profileSlice from './features/profile/profileSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileSlice


    },
});

export default store;
