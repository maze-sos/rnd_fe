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
        const response = await fetch(API_ENDPOINT + "project_payment.php");
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
          <h3>Project Fees</h3>
          <Link className="text-link button" to="/admindash">
            Back To Dashboard
          </Link>
        </div>
        {tableData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Fee</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>{row.description}</td>
                  <td>{row.fee}</td>
                  <td>
                    <Link  className="button">
                      Pay
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

export default List;
