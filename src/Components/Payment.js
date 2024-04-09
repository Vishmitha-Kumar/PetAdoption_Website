import React from "react";
import '../Assets/Css1/Payment.css';

function Payment() {
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
                            <select id="payment-method" name="payment-method" required>
                                <option value="">Select Payment Method</option>
                                <option value="online">Pay Online</option>
                                <option value="cod">Cash on Delivery</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount ($):</label>
                            <input type="number" id="amount" name="amount" required min="0" />
                        </div>
                        <button type="submit">Submit Payment</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Payment;
