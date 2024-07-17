// src/App.js
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import Header from './components/Header';
import Contact from './components/Contact';
import Login from './components/Login';
import Home from './components/Home';
import './App.css'; // Add this line
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <Provider store={store}>
            <Router>
            <ToastContainer />
                <Header />
                <div className="App">
                    <Routes>
                        <Route path="/" element={isLoggedIn ? <Home />  : <Login /> } />
                        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Login/> } />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
