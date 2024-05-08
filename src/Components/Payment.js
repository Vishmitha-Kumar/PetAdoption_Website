import React ,{useState}from "react";
import '../Assets/Css1/Payment.css';
import {useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import{ToastContainer,toast} from 'react-toastify';
import axios from 'axios'


function Payment() {

    const navJ = useNavigate();

    const[data,setData]=useState({
      name:'',
      email:'',
      phone:'',
      address:'',
      breed:'',
      gender:'',
      color:'',
      paymentmethod:''

  
    })
  
  
    const[confirmPassword,setConfirmPassword]=useState('');
  
    const handleChange=(e)=>{
      setData({...data,[e.target.id]:e.target.value})
    }
  
    const handleConfirmPasswordChange=(e)=>{
      setConfirmPassword(e.target.value);
    }
  
 
  
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
        <>
            <div className="wraper">
                <div className="paymentcontainer">
                    <h2>Payment Form</h2>
                    <form id="payment-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" name="address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="breed">Pet Breed:</label>
                            <input type="text" id="breed" name="breed" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Pet Gender:</label>
                            <select id="gender" name="gender" required>
                                <option value="">Select...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="color">Pet Color:</label>
                            <input type="text" id="color" name="color" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="payment-method">Payment Method:</label>
                            <select id="paymentmethod" name="payment-method" required>
                                <option value="">Select Payment Method</option>
        
                                <option value="cod">Cash on Delivery</option>
                            </select>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="amount">Amount ($):</label>
                            <input type="number" id="amount" name="amount" required min="0" />
                        </div> */}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Payment;