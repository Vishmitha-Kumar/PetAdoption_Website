import React, { useState } from 'react';
import Nav from './Nav';
import '../Assets/Css/nav.css';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Register() {

  const navJ = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  
  const [address, setAddress] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

 

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (password === confirmPassword) {
      
      alert('Registration successful!');
      navJ('/login')
      
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
      {/* <Nav /> */}
      <div className="wrap">
        <div className="reg">
          <form onSubmit={handleSubmit}>
            <h3>Registration Form</h3>
            <input
              type="text"
              id="user"
              placeholder="Username"
              className="auth-inputr"
              required
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="auth-inputr"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              id="pwd"
              placeholder="Password"
              className="auth-inputr"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="auth-inputr"
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="auth-inputr"
              required
              value={phone}
              onChange={handlePhoneChange}
            />
           
            <input
              type="textarea"
              placeholder="Address"
              className="auth-inputr"
              value={address}
              onChange={handleAddressChange}
            />
            <input type="submit" value="Register" className="auth-btr" />
            <Link to='/'>
               <h4 style={{color:'black',textDecoration:'none',listStyle:'none'}}>Back</h4>
               </Link>
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

export default Register;