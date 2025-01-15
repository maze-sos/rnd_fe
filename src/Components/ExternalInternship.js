import React, { useState } from 'react';
import '../Css/Register.css';
import axios from 'axios';
import { API_ENDPOINT } from "./Config";

const ExternalInternship = () => {
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [department, setDepartment] = useState('');
    const [fieldStudy, setFieldStudy] = useState('');
    const [skill, setSkill] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [internshipLetter, setInternshipLetter] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleFileChange = (e) => {
        setInternshipLetter(e.target.files[0]);
    };

    const handleSubmit = async () => {
        const url = API_ENDPOINT + "external_internship.php";
  
        let fData = new FormData();
        fData.append("name", name);
        fData.append("school", school);
        fData.append("department", department);
        fData.append("fieldStudy", fieldStudy);
        fData.append("skill", skill);
        fData.append("phone", phone);
        fData.append("email", email);
        fData.append("date", date);
        if (internshipLetter) fData.append("internshipLetter", internshipLetter);
  
        try {
            const response = await axios.post(url, fData);
            setSuccess(response.data.message || 'Submission successful.');
            setError('');
            // Clear form fields after successful submission
            setName('');
            setSchool('');
            setDepartment('');
            setFieldStudy('');
            setSkill('');
            setPhone('');
            setEmail('');
            setDate('');
            setInternshipLetter(null);
            document.getElementById("internshipLetter").value = ""; // Clear file input
        } catch (error) {
            console.error(error);
            setError('An error occurred while submitting.');
            setSuccess('');
        }
    };

    return (
        <div className="formbody">
            <div className="form-container">
                <h2>External Internship Form</h2>
                {error && <p style={{ color: 'red', margin: 15 }}>{error}</p>}
                {success && <p style={{ color: 'green', margin: 15 }}>{success}</p>}
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="school">School:</label>
                        <input type="text" id="school" name="school" placeholder="Enter Your School" required value={school} onChange={(e) => setSchool(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <input type="text" id="department" name="department" placeholder="Enter Your Department" required value={department} onChange={(e) => setDepartment(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fieldStudy">Field of Study:</label>
                        <input type="text" id="field-study" name="fieldStudy" placeholder="Enter Your Field of Study" required value={fieldStudy} onChange={(e) => setFieldStudy(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="skill">Skill:</label>
                        <input type="text" id="skill" name="skill" placeholder="Enter Your Skill" required value={skill} onChange={(e) => setSkill(e.target.value)} />
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
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" name="date" placeholder="Enter Date" required value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="internshipLetter">Internship Letter:</label>
                        <input type="file" id="internshipLetter" name="internshipLetter" onChange={handleFileChange} />
                    </div>
                    <div className="form-group">
                        <button type="button" value="SEND" name="send" id="send" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExternalInternship;
