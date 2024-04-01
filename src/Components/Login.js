import React, { useState } from 'react';
import Nav from './Nav';
import '../Assets/Css/nav.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
function Login() {

  const navH = useNavigate();

  const[data,setData]=useState({
    email:'',
    password:''
  })
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (email=== 'Isai@gmail.com' && password === '0706') {
       alert("Welcome!!")
      navH('/welcome')

    } else {
      toast.error('Invaild Username (or) Password', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
   
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="register">
          <form onSubmit={handleSubmit}>
            <h1>Petty Pet</h1>
            <h3>Login</h3>
            
             <input
              type="email"
              id="email"
              placeholder="Email"
              className="auth-inputr"
              required
              
              onChange={handleChange}
            />
            <input
              type="password"
              id="pwd"
              placeholder="Password "
              className="auth-input"
              required
              value={password}
              onChange={handlePasswordChange}
            />

            <input type="submit" value="Login" className="auth-bts" />

          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Login;