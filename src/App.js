import { useState , useEffect } from 'react';
import userData from './userData/user.json';
import User from './components/User/User';
import './App.css';

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(userData);
  },[]);

  const [cart , setCart] = useState([]);

  const handleClick = (user) => {
    const newData = [...cart, user];
    setCart(newData);
  }
  const totalSalary = cart.reduce((total, item) => total + item.salary, 0);
  const fixedTotalSalary = Number(totalSalary.toFixed(2));
  
  return (
    <div>
        <h1>User Added: {cart.length}</h1>
        <h2>Total Salary: {fixedTotalSalary}</h2>
        <h3>Names of added users:</h3>
        <ul>
          {
            cart.map(item => <li key = {item._id}>{item.name}</li>)
          }
        </ul>
        <ul>
          {
            user.map(user => <User user = {user} key = {user._id} handleClick = {handleClick} />)
          }
        </ul>
    </div>
  );
}

export default App;
