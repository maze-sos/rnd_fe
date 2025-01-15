import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Css/Register.css';
import { API_ENDPOINT } from "./Config";
import { useAuth } from './AuthContext';

const AdminLogin = () => {
  const location = useLocation();
  const message = location.state?.message;
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleLogin } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fData = new FormData();
    fData.append("email", email);
    fData.append("password", password);

    try {
      const response = await axios.post(`${API_ENDPOINT}admin_login_check.php`, fData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        handleLogin(response.data.email); 
        navigate('/admindash');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('An error occurred while logging in.');
    }
  };

  return (
    <div className="formbody">
      <div className="form-container">
        <h2>Admin Login</h2>
        {message && <p className="message">{message}</p>}
        {error && <p className="errormessage">{error}</p>}
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
              placeholder="Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" value="SEND" name="send" id="send">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
