import React, { useState } from 'react';
import '../Css/Register.css';
import axios from 'axios';
import { API_ENDPOINT } from "./Config";

const StaffMembership = () => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [focusArea, setFocusArea] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = API_ENDPOINT + "staff_membership.php";
        let fData = new FormData();
        fData.append("name", name);
        fData.append("department", department);
        fData.append("focusArea", focusArea);
        fData.append("phone", phone);
        fData.append("email", email);

        try {
            const response = await axios.post(url, fData);
            setSuccess(response.data.message || 'Submission successful.');
            setError('');
            setName('');
            setDepartment('');
            setFocusArea('');
            setPhone('');
            setEmail('');
        } catch (error) {
            console.error(error);
            setError('An error occurred while submitting.');
            setSuccess('');
        }
    };

    return (
        <div className="formbody">
            <div className="form-container">
                <h2>Staff Membership Form</h2>
                {error && <p style={{ color: 'red', margin: 15 }}>{error}</p>}
                {success && <p style={{ color: 'green', margin: 15 }}>{success}</p>}
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <input type="text" id="department" name="department" placeholder="Enter Your Department" required value={department} onChange={(e) => setDepartment(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="focus-area">Focus Area:</label>
                        <input type="text" id="focus-area" name="focusArea" placeholder="Enter Your Focus Area" required value={focusArea} onChange={(e) => setFocusArea(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your E-Mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button type="button" value="SEND" name="send" id="send" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StaffMembership;
