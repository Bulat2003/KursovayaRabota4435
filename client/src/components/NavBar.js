import React, { useContext } from 'react';
import { Button } from "@mui/base";
import { Context } from "../index";
import '../styles/forNav.css';
import logo from "../assets/OIG 1.svg";
import { NavLink } from "react-router-dom";
import {
    ABOUT_ROUTE,
    AUTH_ROUTE,
    CONTACTS_ROUTE,
    MAIN_ROUTE,
    MANAGER_ROUTE,
    REGISTRATION_ROUTE, USER_ROUTE
} from "../utils/consts";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
    const { user } = useContext(Context);
    const logOut = ()=>{
        user.setUserRole({})
        user.setIsAuth(false)
    }

    return (
        <div className="main-content-container">
            <div className="header-navigation-bar">
                <div className="header-section">
                    <div className="drive-flex-container">
                        <img src={logo} alt="logo" className="rounded-image-container" width={100} height={100}/>
                    </div>
                    <p className="brand-heading-text-style">DriveFlex</p>
                </div>
                <div className="navigation-links-container">
                    <NavLink to={MAIN_ROUTE} className="main-title-text-style">Главная страница</NavLink>
                    <NavLink to={CONTACTS_ROUTE} className="main-section-title">Контакты</NavLink>
                    <NavLink to={ABOUT_ROUTE} className="main-section-title">О компании</NavLink>
                </div>
                {user.isAuth ?
                    <div className="reg-auth-button">
                        <NavLink to={MANAGER_ROUTE} className="main-section-title reg">
                            Личный кабинет
                        </NavLink>
                    </div>

                    :

                    <div className="reg-auth-button">
                        <NavLink to={REGISTRATION_ROUTE} className="main-section-title reg">
                            Зарегистрироваться
                        </NavLink>
                        <NavLink to={AUTH_ROUTE} onClick={() => user.setIsAuth(false)}>
                            <Button className="login-button-style">Войти</Button>
                        </NavLink>
                    </div>
                }
            </div>
        </div>
    )
        ;
});

export default NavBar;
