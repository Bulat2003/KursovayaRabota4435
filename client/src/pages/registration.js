import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {AUTH_ROUTE, MAIN_ROUTE,} from "../utils/consts";
import {Link, useNavigate} from "react-router-dom";
import '../styles/reg.css'
import {registration} from "../http/userAPI";
import {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Registration = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('client')
    const [password, setPassword] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const[phone, setPhone] = useState('')
    const[birthday, setBirthday] = useState('')

    let data;
    const reg = async () =>{
        try{
            const data = await registration(lastName, firstName, patronymic, email, password,phone, birthday, role);
            user.setIsAuth(true)
            user.setUserRole(user)
            navigate(MAIN_ROUTE)
        }catch (e){
            alert(e.response.data.message)
        }
    }
    return (
        <Container className="registration-container">
            <Card className="registration-card">
                <h2 className="registration-title">Регистрация</h2>
                <Form className="registration-form">
                    <Row className="registration-form-row">
                        <Col md={6} className="registration-form-col">
                            <p className="registration-label">Выберите роль</p>
                            <Form.Select className="registration-input"
                                         value={role}
                                         onChange={e => setRole(e.target.value)}>
                                <option value="client">Клиент</option>
                                <option value="driver">Водитель</option>
                            </Form.Select>
                        </Col>
                        <Col md={6} className="registration-form-col">
                            <p className="registration-label">Введите фамилию</p>
                            <Form.Control
                                className="registration-input" placeholder="Иванов"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="registration-form-row">
                        <Col md={6} className="registration-form-col">
                            <p className="registration-label">Введите имя</p>
                            <Form.Control
                                className="registration-input" placeholder="Иван"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </Col>
                        <Col md={6} className="registration-form-col">
                            <p className="registration-label">Введите отчество</p>
                            <Form.Control
                                className="registration-input" placeholder="Иванович"
                                value={patronymic}
                                onChange={e => setPatronymic(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="registration-form-row">
                        <Col md={6} className="registration-form-col">
                            <p className="registration-label">Введите email</p>
                            <Form.Control
                                className="registration-input" placeholder="for_example@mail.ru"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Col>
                        <Col md={6} className="registration-form-col">
                            <p className="registration-label">Введите номер телефона</p>
                            <Form.Control
                                type="number"
                                className="registration-input" placeholder="879623651452"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="registration-form-row">
                        <Col md={6} className="registration-form-col">
                            <p className="registration-label">Введите пароль</p>
                            <Form.Control
                                type="password" className="registration-input" placeholder="•••••••"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Col>
                        <Col md={6} className="registration-form-col">
                            <p className="registration-label">Введите дату рождения</p>
                            <Form.Control
                                type="date" className="registration-input" placeholder="11-12-2003"
                                value={birthday}
                                onChange={e => setBirthday(e.target.value)}
                            />
                        </Col>
                    </Row>
                </Form>
                <Button className="registration-button" onClick={reg}>Зарегистрироваться</Button>
                <div className="registration-route">
                    <p className="registration-text">Есть аккаунт?</p> <Link className="registration-link" to={AUTH_ROUTE}><p>Войти</p></Link>
                </div>
            </Card>
        </Container>
    );
});

export default Registration;
