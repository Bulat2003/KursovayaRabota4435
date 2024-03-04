import React, { useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchCars, fetchDrivers } from "../http/driversAPI";
import car from "../assets/car.svg";
import { useNavigate } from "react-router-dom";
import Order from "./modals/Order";

const DriversList = observer(() => {
    const { drivers, cars } = useContext(Context);
    const navigate = useNavigate();
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const driversData = await fetchDrivers();
                drivers.setDrivers(driversData);

                const carsData = await fetchCars();
                cars.setCars(carsData);

            } catch (error) {
                alert(error)
            }
        };

        fetchData();
    }, []);

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const openOrderModal = (driverId) => {
        setIsOrderModalOpen(true);
    };


    const closeOrderModal = () => {
        setIsOrderModalOpen(false);
    };

    return (
        <div className="offers-container">
            {drivers.Drivers.map(driver => (
                <div className="offer" key={driver.id}>
                    <img src={car} alt="car"/>
                    <div className="offer-info">
                        <p className="name">ИП {driver.FirstName}</p>
                        <p className="payload">
                            {driver.Car ? `${driver.Car.Payload} тонн` : 'Нет данных'}
                        </p>
                    </div>
                    <div className="offer-price">
                        <p className="payload">Сумма доставки</p>
                        <p className="name">66604</p>
                    </div>
                    <div className="offer-price">
                        <p className="payload">Страховка</p>
                        <p className="name">11929</p>
                    </div>
                    <div className="offer-price">
                        <p className="payload">Предоплата</p>
                        <p className="name">9324</p>
                    </div>
                    <button className="button" onClick={() => openOrderModal(driver.id)}>Заказать</button>
                </div>

            ))}
            <Order show={isOrderModalOpen} onHide={closeOrderModal} />
        </div>
    );
});

export default DriversList;
