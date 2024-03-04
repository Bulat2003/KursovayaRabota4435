import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import OneDriver from "../pages/oneDriver";
import OneClient from "../pages/oneClient";
import client from "../pages/oneClient";
import AllClients from "../pages/allClients";
import AllDrivers from "../pages/allDrivers";
const AppRouter = () => {
    const{user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path,Component}) =>
                <Route key={path} path={path} Component={Component} exact/>
            )}
            {publicRoutes.map(({path,Component}) =>
                <Route key={path} path={path} Component={Component} exact/>
            )}
            <Route path="/" element={<AllDrivers />} />
            <Route path="/onedriver/:id" element={<OneDriver />} /> {/* Маршрут для страницы OneDriver */}

            <Route path="/" element={<AllClients />} />
            <Route path="/oneclient/:id" element={<OneClient />} /> {/* Маршрут для страницы OneClient */}
        </Routes>
    );
};

export default AppRouter;