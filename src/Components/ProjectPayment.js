import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/List.css";
import { API_ENDPOINT } from "./Config";
import { useAuth } from './AuthContext';

function List() {
  const { studentId } = useAuth();
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploadStatus, setUploadStatus] = useState({});

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
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleReceiptUpload = async (e, rowId) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("studentid", studentId); // Make sure studentId is not null or empty
    formData.append("receipt", file);
    formData.append("rowid", rowId); 

    // Log the values before uploading
    console.log("Uploading receipt with Student ID:", studentId, "and Row ID:", rowId);

    try {
      const response = await axios.post(API_ENDPOINT + "upload_receipt.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload response:", response.data); // Log the response

      if (response.data.success) {
        setUploadStatus((prev) => ({
          ...prev,
          [rowId]: "Receipt uploaded successfully",
        }));
      } else {
        setUploadStatus((prev) => ({
          ...prev,
          [rowId]: "Upload failed: " + response.data.message,
        }));
      }
    } catch (error) {
      console.error("Error during upload:", error);
      setUploadStatus((prev) => ({
        ...prev,
        [rowId]: "An error occurred during upload",
      }));
    }
};


  const checkUploadStatus = async (rowId) => {
    try {
      const response = await axios.get(`${API_ENDPOINT}check_payment_status.php?rowid=${rowId}&studentid=${studentId}`);
      if (response.data.success) {
        return response.data.payments.length > 0; // Return true if there are payment records
      }
    } catch (error) {
      console.error("Error checking upload status", error);
    }
    return false;
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
          <h3>Project Fees</h3>
          <Link className="text-link button" to="/projectdash">
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
                <th>Receipt Upload</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>{row.description}</td>
                  <td>₦{row.fee}</td>
                  <td>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const hasUploaded = await checkUploadStatus(row.id);
                        if (hasUploaded) {
                          setUploadStatus((prev) => ({
                            ...prev,
                            [row.id]: "Receipt already uploaded",
                          }));
                        } else {
                          handleReceiptUpload(e, row.id, studentId);
                        }
                      }}
                    />
                  </td>
                  <td>{uploadStatus[row.id] || "Awaiting receipt"}</td>
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
