import '../styles/Auth.css'
import {Container, Button, Form, Card} from "react-bootstrap";
import {MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const auth = async () =>{
        try{
            const response = await login(email, password);
            user.setIsAuth(true)
            navigate(MAIN_ROUTE);
        } catch (e){
            alert(e.response.data.message);
        }
    }
    return (
        <Container className=" container-enter" style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <p className="none email-password p">Введите email</p>
                    <Form.Control
                        type="text" className="input-class" placeholder="for_example@mail.ru"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p className="none email-password p">Введите пароль</p>
                    <Form.Control
                        type="password" className="input-class" placeholder="•••••••"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form>
                <Button className=" enter-button" onClick={auth}>Войти</Button>
                    <div className="reg-route">
                        <p className="none p">Нет аккаунта?</p> <Link className="reg" to={REGISTRATION_ROUTE}><p>Зарегистрироваться</p></Link>
                    </div>
            </Card>
        </Container>
    );
});

export default Auth;