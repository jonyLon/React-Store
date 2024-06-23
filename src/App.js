// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // маємо таблицю із користувачами
  // має інпути куди вносимо інформацію
  // при натиску кнопки додати користувача в таблицю. Використать useState

  let count = 5;
  // const [count, setCount] = useState(5);
  const [formData, setFormData] = useState({
    name: '',
    surname: ''
  });
  const [users, setUsers] = useState([]);
  // const handleClick = () => {
  //   console.log("Нажали кнопку", count);
  //   setCount(count + 1);
  //   //count++
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData])
    setFormData({
      name: "",
      surname: ""
    })
  }

  return (
    <>
      <h1>Привіт React {count}</h1>
      <form onSubmit={handleSubmit}>
        <label>Ім'я</label><br></br>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Прізвище</label><br></br >
        <input
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Додати користувача</button>
      </form>

      <h2>Користувачі</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Ім'я</th>
            <th>Прізвище</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
