// AllClients.js
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../index';
import {deleteClient, deleteDriver, fetchClients, fetchDrivers} from '../http/driversAPI';
import { Button, Container } from 'react-bootstrap';
import {MANAGER_ROUTE, ONECLIENT} from '../utils/consts';

const AllClients = () => {
    const { clients } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        fetchClients().then(data => clients.setClients(data));
    }, [clients]);


    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleDeleteClient = async (id) => {
        try {
            await deleteClient(id);
            fetchClients().then((data) => clients.setClients(data));
        } catch (error) {
            console.error('Ошибка при удалении водителя:', error);
        }
    };
    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center">
                <title id="contained-modal-title-vcenter">
                    Список водителей
                </title>
                <div>
                {clients.Clients.map(client =>
                    <table key={client.id} className="mb-5">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Имя</th>
                            <th>Дата рождения</th>
                            <th>Просмотреть</th>
                            <th>Удалить</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{client.id}</td>
                            <td>{client.FirstName}</td>
                            <td>{formatDate(client.Birthday)}</td>
                            <td>
                                <Button variant={'outline-dark'}
                                        onClick={() => navigate(`${ONECLIENT}/${client.id}`)}>Подробнее</Button>
                            </td>
                            <td>
                                <Button
                                    onClick={() => {
                                        deleteClient(client.id);
                                    }}
                                    variant={'outline-danger'}
                                >Удалить</Button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                )}
                <Button className="d-flex justify-content-center align-items-center"
                        onClick={() => navigate(MANAGER_ROUTE)} variant={'outline-danger'}>Назад</Button>
                </div>
                </div>
        </Container>
    );
};

export default AllClients;
