"use client";
import React, { useEffect, useState } from 'react';

function Page() {
  const [formData, setFormData] = useState(null);  // State to hold the form data

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch(`http://localhost:5500/api/v1/forms/readall/`);
        if (!response.ok) {
          throw new Error('Failed to fetch form data');
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    };

    fetchForm();
  }, []); 

  return (
    <div className="table-container" role="region" tabIndex="0">
      <table className="data-table">
        <caption>Form Details</caption>
        <thead>
          <tr>
            <th>Form No</th>
            <th>Registered Date</th>
            <th>Student Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData ? (
            <tr key={formData.form_no}>
              <td>{formData.form_no}</td>
              <td>{new Date(formData.reg_date).toLocaleDateString()}</td>
              <td>{formData.student_name}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
