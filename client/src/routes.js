import {
    ABOUT_ROUTE,
    AUTH_ROUTE, CLIENTS_ROUTE,
    CONTACTS_ROUTE,
    DRIVER_ROUTE, DRIVERS_ROUTE,
    MAIN_ROUTE,
    MANAGER_ROUTE,
    REGISTRATION_ROUTE,
    USER_ROUTE,
    ONEDRIVER,
    ONECLIENT
} from "./utils/consts";
import manager from "./pages/manager";
import user from "./pages/user";
import driver from "./pages/driver";
import auth from "./pages/auth";
import contacts from "./pages/contacts";
import mainPage from "./pages/mainPage";
import registration from "./pages/registration";
import about from "./pages/about";
import drivers from'./pages/allDrivers'
import clients from'./pages/allClients'
import onedriver from './pages/oneDriver'
import oneclient from './pages/oneClient'

export const authRoutes =[

]

export const publicRoutes =[
    {
        path: AUTH_ROUTE,
        Component: auth
    },
    {
        path: CONTACTS_ROUTE,
        Component: contacts
    },
    {
        path: MANAGER_ROUTE,
        Component: manager
    },
    {
        path: MAIN_ROUTE,
        Component: mainPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: registration
    },
    {
        path: USER_ROUTE,
        Component: user
    },
    {
        path: DRIVER_ROUTE,
        Component: driver
    },
    {
        path: DRIVERS_ROUTE,
        Component: drivers
    },
    {
        path: ABOUT_ROUTE,
        Component: about
    },
    {
        path: CLIENTS_ROUTE,
        Component:clients
    },
    {
        path: ONECLIENT,
        Component: oneclient
    },
    {
        path: ONEDRIVER,
        Component: onedriver
    }

]