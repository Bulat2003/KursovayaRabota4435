import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { fetchDrivers, deleteDriver } from '../http/driversAPI';
import { MANAGER_ROUTE, ONEDRIVER } from '../utils/consts';
import {observer} from "mobx-react-lite";

const AllDrivers = observer(() => {
    const { drivers } = useContext(Context);
    const navigate = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [driverIdToDelete, setDriverIdToDelete] = useState(null);

    useEffect(() => {
        fetchDrivers().then((data) => drivers.setDrivers(data));
    }, []);
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleCloseConfirmation = () => setShowConfirmation(false);

    const handleDeleteDriver = async (id) => {
        try {
            await deleteDriver(id);
            fetchDrivers().then((data) => drivers.setDrivers(data));
        } catch (error) {
            console.error('Ошибка при удалении водителя:', error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" size="lg">
            <title id="contained-modal-title-vcenter">Список водителей</title>
            <div>
                {drivers.Drivers.map((item) => (
                    <table key={item.id} className="mb-5">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Имя</th>
                            <th>Телефон</th>
                            <th>Дата рождения</th>
                            <th>Просмотреть</th>
                            <th>Удалить</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.FirstName}</td>
                            <td>{item.Phone}</td>
                            {/* Format the date */}
                            <td>{formatDate(item.Birthday)}</td>
                            <td>
                                <Button
                                    variant={'outline-dark'}
                                    onClick={() => navigate(ONEDRIVER + '/' + item.id)}
                                >
                                    Подробнее
                                </Button>
                            </td>
                            <td>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => {
                                        deleteDriver(item.id);
                                    }}
                                >
                                    Удалить
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                ))}
                <Button className="d-flex justify-content-center align-items-center" onClick={() => navigate(MANAGER_ROUTE)} variant={'outline-danger'}>
                    Назад
                </Button>
            </div>

        </div>
    );
});

export default AllDrivers;
