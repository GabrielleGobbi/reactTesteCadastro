import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/index.jsx';
import Login from './pages/Login/index.jsx';

const CriateRouter = ()=> {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
        </Routes>
    )
}

export default CriateRouter;