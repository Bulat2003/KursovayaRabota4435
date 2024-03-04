import { Container } from "react-bootstrap";
import listImg from '../assets/listButton.svg';
import filters from '../assets/filtersButton.svg';
import car from '../assets/car.svg';
import '../styles/mainPage.css';
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import DriversList from "../components/driversList";


const MainPage = observer(() => {
    return (
        <Container className="fullPage">
            <div className="slogan-container">
                <h1>DriveFlex - Мы Доставляем удовольствие!</h1>
            </div>
            <div className="controls-container">
                <div className="control">
                    <img src={listImg} alt="list" width="24px" height="24px" />
                    <p>По популярности</p>
                </div>
                <div className="control">
                    <img src={filters} alt="filter" />
                    <p>Фильтры</p>
                </div>
            </div>
            <DriversList/>

        </Container>
    );
});

export default MainPage;
