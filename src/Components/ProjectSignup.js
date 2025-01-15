import React, { useState } from 'react';
import '../Css/Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from "./Config";

const ProjectSignup = () => {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${API_ENDPOINT}project_signup.php`;

        let fData = new FormData();
        fData.append("name", name);
        fData.append("studentid", studentId);
        fData.append("email", email);
        fData.append("department", department);
        fData.append("password", password);
        fData.append("confirmpassword", confirmPassword);

        try {
            const response = await axios.post(url, fData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                navigate('/login/projectlogin', { state: { message: 'Signup was successful!' } });
            } else {
                setError(response.data.message || 'Signup failed. Please check your inputs.');
            }
        } catch (error) {
            console.error(error); // Log the error for debugging
            setError('An error occurred during signup. Please try again.');
        }
    }

    return (
        <div className="formbody">
            <div className="form-container">
                <h2>Project Student Signup</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="studentid">Student ID:</label>
                        <input id="studentid" name="studentid" placeholder="Enter Your Student ID" required value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your E-Mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <input type="text" id="department" name="department" placeholder="Enter Your Department" required value={department} onChange={(e) => setDepartment(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter Your Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmpassword">Confirm Password:</label>
                        <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Your Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button type="submit" value="SEND" name="send" id="send">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectSignup;
