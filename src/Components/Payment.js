
import React, { useState } from "react";
import '../Assets/Css1/Payment.css';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Payment() {
   

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        breed: '',
        gender: '',
        color: '',
        paymentmethod: ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/v1/pay/save', data)
            .then(response => {
                console.log("Success" + response);
                toast.success('Payment information submitted successfully!', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(error => {
                toast.error('Error submitting payment information!', {
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
        <>
            <ToastContainer />
            <div className="wraper">
                <div className="paymentcontainer">
                    <h2>Payment Form</h2>
                    <form id="payment-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={data.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={data.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" value={data.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" name="address" value={data.address} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="breed">Pet Breed:</label>
                            <input type="text" id="breed" name="breed" value={data.breed} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Pet Gender:</label>
                            <select id="gender" name="gender" value={data.gender} onChange={handleChange} required>
                                <option value="">Select...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="color">Pet Color:</label>
                            <input type="text" id="color" name="color" value={data.color} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="payment-method">Payment Method:</label>
                            <select id="paymentmethod" name="payment-method" value={data.paymentmethod} onChange={handleChange} required>
                                <option value="">Select Payment Method</option>
                                <option value="cod">Cash on Delivery</option>
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Payment;
