import React from "react";
// import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../Css/AdminDash.css';
// import { API_ENDPOINT } from "./Config";

const Side = ({ email }) => (
  <div id="sidebar">
    <div className="profile">
      <p>Welcome, <br />
        <strong>{email}</strong>
      </p>
    </div>
    <ul className="nav-list">
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminexternalinternship">
          External Internships
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/admininternalinternship">
          Internal Internships
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminexternalmembership">
          External Memberships
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminstaffmembership">
          Staff Memberships
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminstudentmembership">
          Student Memberships
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminstudentproject">
          Add Student Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminviewstudentprojects">
          View Student Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminprojectinformation">
          Add Student Projects Information
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminviewprojectinformation">
          View Student Projects Information
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminprojectpayment">
          Add Student Projects Fee
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminviewprojectpayment">
          View Student Projects Fee
        </Link>
      </li>
      <li className="nav-item">
        <Link className='side-text-link' to="/admindash/adminprojectuploads">
          View Project Uploads
        </Link>
      </li>
    </ul>
  </div>
);

// const Cards = ({ counts }) => (
//   <div id="content">
//     <div className="cards">
//       {counts.map((item, index) => (
//         <div className="card" key={index}>
//           <h5>No. of {item.title}:</h5>
//           <p>{item.total}</p>
//           <Link className='text-link dropdown-item' to={item.link}>
//             View
//           </Link>
//         </div>
//       ))}
//     </div>
//   </div>
// );

const Dashboard = () => {
  // const [tableData, setTableData] = useState([]);
  const { email } = useAuth();

  // useEffect(() => {
  //   const fetchTableData = async (tableName) => {
  //     try {
  //       const response = await fetch(API_ENDPOINT + `admin_totals.php?table=${tableName}`);
  //       const result = await response.json();

  //       if (result.success) {
  //         setTableData(prevData => [...prevData, ...result.data]);
  //       } else {
  //         console.error(result.message);
  //       }
  //     } catch (error) {
  //       console.error('An error occurred:', error);
  //     }
  //   };

  //   const tables = [
  //     'staff_membership', 'student_membership', 'student_projects',
  //     'external_membership', 'internal_internship', 'external_internship'
  //   ];

  //   tables.forEach(fetchTableData);
  // }, []);

  return (
    <div>
      <Side email={email} />
      {/* <Cards counts={tableData} /> */}
    </div>
  );
};

export default Dashboard;
