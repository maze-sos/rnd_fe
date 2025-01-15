import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../Css/ProjectDash.css'; 
import { API_ENDPOINT } from "./Config";

const Side = ({ studentId }) => {
  return (
    <div id="project-sidebar">
      <div className="profile">
        <p>Welcome,</p>
        <p className='user-email'>{studentId}</p>
      </div>
      <ul className="pr-nav-list">
        <li className="pr-nav-item">
          <Link className='pr-side-text-link' to="/projectdash/projectinformation">
            Project Information
          </Link>
        </li>
        <li className="pr-nav-item">
          <Link className='pr-side-text-link' to="/projectdash/projectpayment">
            Project Fees
          </Link>
        </li>
        <li className="pr-nav-item">
          <Link className='pr-side-text-link' to="/projectdash/projectupload1">
            Project Upload
          </Link>
        </li>
      </ul>
    </div>
  );
};

const List = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT + "latest_project_information_dash.php");
        const result = await response.json();

        if (result.success) {
          setTableData(result.data);
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="projectnews">
      <div className="news">
        <div className="tabletop">
          <h3>Latest Project Information From School</h3>
        </div>
        {tableData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Created At</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>{row.author}</td>
                  <td>{row.created_at}</td>
                  <td>
                    <Link to={`/projectdash/projectdetails/${row.id}`} className="button">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

const Dashboard = () => {
  const { studentId } = useAuth(); 

  return (
    <div>
      <Side studentId={studentId} />
      <List />
    </div>
  );
}

export default Dashboard;
