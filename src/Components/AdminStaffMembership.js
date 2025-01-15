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
        const response = await fetch(API_ENDPOINT + "admin_staff_membership.php");
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
    <div className="listbody">
      <div className="list">
        <div  className="tabletop">
          <h3>Staff Membership Applicants</h3>
          <Link className="text-link button" to="/admindash">
            Back To Dashboard
          </Link> 
        </div>
        {tableData.length > 0 ? (
          <table>
            <thead>
              <tr>
                {Object.keys(tableData[0]).map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, columnIndex) => (
                    <td key={columnIndex}>{value}</td>
                  ))}
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
