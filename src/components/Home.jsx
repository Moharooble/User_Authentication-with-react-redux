// src/components/Dashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    return (
        <div>
            <h2>Welcome: </h2> <span>{user.name}</span>

        </div>
    );
};

export default Home;
