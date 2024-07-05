// import logo from './logo.svg';
import './App.css';
import MainHeader from "./components/containers/header";
import HomePage from "./components/home";
import {useState} from "react";
import Accordion from "./components/accordion";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/containers";
import RegisterPage from "./components/auth/register";
import NotFoundPage from "./components/pages/404";
import AddPhotosPage from "./components/pages/add_photos";
import CreatePizzaPage from "./components/pizza/create";
import {AuthContext, initState} from "./authContext";


function App() {

    const [auth, setAuth] = useState({
        ...initState,
        login: (user) => {
            setAuth({...auth, isAuth: true, user});
        },
        logout: () => {
            setAuth({...auth, isAuth: false, user: null});
        }
    });
    return (
      <>
          <AuthContext.Provider value={auth}>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<HomePage/>}/>
                  <Route path={"register"} index element={<RegisterPage/>}/>
                  <Route path={"add_photos"} index element={<AddPhotosPage/>}/>
                  <Route path={"pizza"}>
                    <Route path={"create"} index element={<CreatePizzaPage/>}/>
                  </Route>
                  <Route path={"*"} element={<NotFoundPage/>}/>
              </Route>
          </Routes>
          </AuthContext.Provider>
      </>
  );
}

export default App;
