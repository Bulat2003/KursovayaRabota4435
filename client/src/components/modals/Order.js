import React, { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import { createOrder } from "../../http/driversAPI";

const Order = ({ show, onHide }) => {
    const [firstPoint, setStartPoint] = useState('');
    const [lastPoint, setEndPoint] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const addOrder = () => {
        if (!firstPoint || !lastPoint || !description) {
            setError('Пожалуйста, заполните все поля.');
            return;
        }

        createOrder(firstPoint, lastPoint, description)
            .then(data => {
                onHide();
                alert("Заказ успешно добавлен")
            })
            .catch(error => {
                setError('Произошла ошибка при создании заказа.');
                console.error("Ошибка создания заказа:", error);
            });
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Оформление заказа
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="p-3">
                        <h4>Введите начальную точку</h4>
                        <Form.Control
                            value={firstPoint}
                            onChange={e => setStartPoint(e.target.value)}
                            placeholder={"г.Москва"}
                        />
                    </div>
                    <div className="p-3">
                        <h4>Введите конечную точку</h4>
                        <Form.Control
                            value={lastPoint}
                            onChange={e => setEndPoint(e.target.value)}
                            placeholder={"г.Казань"}
                        />
                    </div>
                    <div className="p-3">
                        <h4>Введите описание</h4>
                        <Form.Control
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder={"Я устал разрабатывать эту программу"}
                        />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addOrder}>Отправить заказ</Button>
                <Button variant="outline-dark" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Order;
