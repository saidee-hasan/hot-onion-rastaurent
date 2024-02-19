import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home/Home';
import { CategoryContaxt } from '../App';
import Shop from '../components/Shop/Shop';

const MinLayout = () => {
    const [productCount, setProductCount] =useContext(CategoryContaxt)
    return (
        <div>
            <Header></Header>
            <Home setProductCount={setProductCount}></Home>
            <Shop></Shop>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MinLayout;