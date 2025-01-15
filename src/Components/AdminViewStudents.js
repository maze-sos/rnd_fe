import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../Css/List.css';
import { API_ENDPOINT } from "./Config";

function List() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT + "admin_view_students.php");
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

  const updateStatus = async (studentId, currentStatus, statusField) => {
    // If the status is already 1, do nothing
    if (currentStatus === 1) return;

    const newStatus = 1; // Define the new status

    try {
      const formData = new URLSearchParams();
      formData.append('studentId', studentId);
      formData.append('newStatus', newStatus);
      formData.append('statusType', statusField); // Add the status type

      const response = await fetch(API_ENDPOINT + "update_student_status.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(), // Convert form data to string
      });

      const result = await response.json();

      if (result.success) {
        // Update local state to reflect the change
        setTableData(prevData => 
          prevData.map(student =>
            student.studentid === studentId ? { ...student, [statusField]: newStatus } : student
          )
        );
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('An error occurred while updating status');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="listbody">
      <div className="list">
        <div className="tabletop">
          <h3>Students</h3>
          <Link className="text-link button" to="/admindash">
            Back To Dashboard
          </Link> 
        </div>
        {tableData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Student ID</th>
                <th>Email</th>
                <th>Department</th>
                <th>Payment Status 1</th>
                <th>Payment Status 2</th>
                <th>Join Date</th>
                <th>Action</th> {/* New column for action */}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.studentid}</td>
                  <td>{row.email}</td>
                  <td>{row.department}</td>
                  <td>{row.status_1}</td>
                  <td>{row.status_2}</td>
                  <td>{row.created_at}</td>
                  <td>
                    {/* Change Status 1 Button */}
                    {parseInt(row.status_1, 10) === 0 ? (
                        <button className="text-link button" onClick={() => updateStatus(row.studentid, row.status_1, 'status_1')}>Change "Project Status 1" to 1</button>
                    ) : (
                        <span>Approved</span>
                    )}
                    <br />
                    <br />
                    {/* Change Status 2 Button */}
                    {parseInt(row.status_2, 10) === 0 ? (
                        <button className="text-link button" onClick={() => updateStatus(row.studentid, row.status_2, 'status_2')}>Change "Project Status 2" to 1</button>
                    ) : (
                        <span>Approved</span>
                    )}
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

export default List;
