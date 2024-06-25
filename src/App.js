// import logo from './logo.svg';
import './App.css';
import MainHeader from "./components/containers/header";
import HomePage from "./components/home";
import {useState} from "react";
import Accordion from "./components/accordion";

function App() {



  return (
    <>
        <MainHeader/>
        <HomePage/>
        <Accordion/>
    </>
  );
}

export default App;
