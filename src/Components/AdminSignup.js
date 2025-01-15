import React, { useState } from 'react';
import '../Css/Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from './Config';

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${API_ENDPOINT}admin_signup.php`;

    let fData = new FormData();
    fData.append('email', email);
    fData.append('password', password);
    fData.append('confirmpassword', confirmPassword);

    try {
      const response = await axios.post(url, fData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        navigate('/login/adminlogin', { state: { message: 'Signup was successful!' } });
      } else {
        alert(response.data.message || 'Signup failed');
      }
    } catch (error) {
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="formbody">
      <div className="form-container">
        <h2>Admin Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your E-Mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="Confirm Your Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" id="send">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
