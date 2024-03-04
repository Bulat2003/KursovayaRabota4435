import React, {useContext} from 'react';
import {AUTH_ROUTE, CLIENTS_ROUTE, DRIVERS_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const User = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate()
    const logOut = ()=>{
        user.setUserRole({})
        user.setIsAuth(false)
    }

    return (
        <div className="main-container">
            <div className="manager-label">
                <p>Личный кабинет</p>
            </div>
            <div className="manager-input">
                <button className="for-delete">Изменить данные</button>
                <button className="for-delete">Заказы</button>
            </div>
            <div className="leave">
                <button onClick={() => logOut(navigate(AUTH_ROUTE))} className="leave-button button">Выйти из аккаунта
                </button>
            </div>

        </div>
    );
};

export default User;