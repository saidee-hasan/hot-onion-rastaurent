import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Shop from '../components/Shop/Shop';
import Home from '../components/Home/Home';

const MinLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MinLayout;