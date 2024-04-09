
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import '../Assets/Css/nav.css';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/v1/user/login", data)
      .then(response => {
        // Assuming your API returns a specific status or data on successful login
        if (response.status === 200) {
          toast.info('Welcome!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            navigate('/welcome');
          }, 1800);
        } 
        else {
          throw new Error('Login failed');
        }
      })
      .catch(error => {
        toast.error('Invalid Email or Password!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      });

      });
  };

  return (
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
            id="password" // Corrected the typo here
            placeholder="Password"
            className="auth-input"
            required
            onChange={handleChange}
          />
          <input type="submit" value="Login" className="auth-bts" />
          <Link to='/register' style={{ textDecoration: 'none' }}>
               <h4 style={{color:'black',textDecoration:'none',listStyle:'none'}}>Don't have an account ? Register</h4>
               </Link>
        </form>
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
        style={{ maxWidth: "500px" }}
      />
    </div>
  );
}

export default Login;
