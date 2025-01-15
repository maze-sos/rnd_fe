import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../Css/List.css';
import { API_ENDPOINT } from "./Config";
import Modal from './Modal';

function AdminReceiptList() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT + "get_uploaded_receipts.php");
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

  const handleViewReceipt = (receiptPath) => {
    setSelectedReceipt(receiptPath);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedReceipt('');
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
          <h3>Uploaded Receipts</h3>
          <Link className="text-link button" to="/admindash">
            Back To Dashboard
          </Link>
        </div>
        {tableData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fee Name</th>
                <th>Student ID</th>
                <th>Receipt Path</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>{row.student_id}</td>
                  <td>
                    <button 
                      className="button" 
                      onClick={() => handleViewReceipt(row.receipt_path)}>
                      View Receipt
                    </button>
                  </td>
                  <td>{row.payment_status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>

      {/* Modal for viewing receipt */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        imageSrc={selectedReceipt} 
      />
    </div>
  );
}

export default AdminReceiptList;
