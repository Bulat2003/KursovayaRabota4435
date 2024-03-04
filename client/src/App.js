import {BrowserRouter, useNavigate} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {useContext, useEffect, useState} from "react";
import {DRIVER_ROUTE, MANAGER_ROUTE, USER_ROUTE} from "./utils/consts";
import {Context} from "./index";

function App() {
    const{user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        user.setIsAuth(true)
        user.setUserRole(true)
    }, []);
  return (
    <BrowserRouter>
        <NavBar/>
      <AppRouter/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
