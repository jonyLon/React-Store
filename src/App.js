// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import MainHeader from "./components/containers/header";

function App() {

  return (
    <>
      <MainHeader/>
      <div className="container">
        <h1 className={"text-center"}>Користувачі</h1>

        <table className="table">
          <thead>
          <tr>
            <th scope="col">Фото</th>
            <th scope="col">ПІБ</th>
            <th scope="col">Телефон</th>
            <th scope="col">Пошта</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">
              <div className={"d-flex justify-content-center"}>
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tNB5rc_qoyctOaIfedxwg0_psN3pSHJQwQ&s"}
                    alt={"Користувач"}
                    style={{maxWidth: "75px", maxHeight: "50px",}}/>
              </div>
            </th>
            <td>Марко Іван Васильович</td>
            <td>096 21 25 145</td>
            <td>ivan@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">
              <div className={"d-flex justify-content-center"}>
                <img
                    src={"https://people.com/thmb/Nm5TRrGO050Au3O7PSiHdt424vk=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(576x0:578x2)/Dog-Bitsy-050224-1-0717aedc49ba405aa2a1a8315cb57c51.jpg"}
                    alt={"Користувач"}
                    style={{maxWidth: "75px", maxHeight: "50px",}}/>
              </div>
            </th>
            <td>Інь Янь</td>
            <td>098 21 70 127</td>
            <td>inya@gmail.com</td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
