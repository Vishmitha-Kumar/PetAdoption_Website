import React, { useState } from 'react';
import Nav from './Nav';
import '../Assets/Css/nav.css';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Register() {

  const navJ = useNavigate();

  const[data,setData]=useState({
    username:'',
    email:'',
    password:'',
    phone:'',
    address:''

  })


  const[confirmPassword,setConfirmPassword]=useState('');

  const handleChange=(e)=>{
    setData({...data,[e.target.id]:e.target.value})
  }

  const handleConfirmPasswordChange=(e)=>{
    setConfirmPassword(e.target.value);
  }

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [phone, setPhone] = useState('');
  
  // const [address, setAddress] = useState('');

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleConfirmPasswordChange = (e) => {
  //   setConfirmPassword(e.target.value);
  // };

  // const handlePhoneChange = (e) => {
  //   setPhone(e.target.value);
  // };

 

  // const handleAddressChange = (e) => {
  //   setAddress(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (data.password === confirmPassword) {
      
      axios.post('http://localhost:8080/api/v1/user/save',data)
      .then(response=>{
        console.log("Success"+response);

        navJ('/login')
        setData({});
        setConfirmPassword("");
      })

        .catch(error => {
          toast.error('Email already registered!', {
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
        setData({});
        setConfirmPassword("");
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
              id="username"
              placeholder="Username"
              className="auth-inputr"
              required
             
              onChange={handleChange}
            />
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
              id="password"
              placeholder="Password"
              className="auth-inputr"
              required
              
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="auth-inputr"
              required
             
              onChange={handleConfirmPasswordChange}
            />
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              className="auth-inputr"
              required
             
              onChange={handleChange}
            />
           
            <input
              type="textarea"
              id="address"
              placeholder="Address"
              className="auth-inputr"
              
              onChange={handleChange}
            />
            <input type="submit" value="Register" className="auth-btr" />
            <Link to='/login' style={{ textDecoration: 'none' }}>
               <h4 style={{color:'black',textDecoration:'none',listStyle:'none'}}>Account already exist ? Log in</h4>
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
