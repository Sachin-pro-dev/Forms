"use client";

import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    reg_date: '',
    uid_no: '',
    room_no: '',
    status: '',
    student_name: '',
    dob: '',
    age: '',
    gender: '',
    blood_group: '',
    mobile: '',
    email: '',
    seat_type: '',
    aadhaar: '',
    pan: '',
    bank_account_name: '',
    bank_name: '',
    branch: '',
    account_no: '',
    ifsc: '',
    registration_no: '',
    articleship_from_to: '',
    college_name: '',
    address: '',
    office_tel: '',
    office_email: '',
    pca_name: '',
    pca_mobile: '',
    pca_email: '',
    parent_name: '',
    parent_address: '',
    parent_mobile: '',
    parent_email: '',
    occupation: '',
    income: '',
    guardian_name: '',
    guardian_address: '',
    guardian_mobile: '',
    guardian_email: '',
    cpt_month_year: '',
    cpt_marks: '',
    cpt_percentage: '',
    cpt_average: '',
    foundation_month_year: '',
    foundation_marks: '',
    foundation_percentage: '',
    foundation_average: '',
    ipcc_month_year: '',
    ipcc_marks: '',
    ipcc_percentage: '',
    ipcc_average: '',
    group1_month_year: '',
    group1_marks: '',
    group1_percentage: '',
    group1_average: '',
    group2_month_year: '',
    group2_marks: '',
    group2_percentage: '',
    group2_average: '',
    final_group1_month_year: '',
    final_group2_month_year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5500/api/v1/forms/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const result = await response.json();
      console.log('Form submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="container">
      <div className="header-info">
        <h2>PARMARTH SEVA SAMITI</h2>
        <p>
          B-22 Kalyani Kendra, Shiv Vallabh Road, Ashokvan in front of
          saurashtra Patel hall, Hanuman Tekadi, Borivali East, Mumbai 400066.
        </p>
        <p>
          Email: <a href="mailto:parmathgirlshostel05@gmail.com">parmathgirlshostel05@gmail.com</a>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reg_date">Reg. Date:</label>
          <input
            type="date"
            id="reg_date"
            name="reg_date"
            value={formData.reg_date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="uid_no">UID No:</label>
          <input
            type="text"
            id="uid_no"
            name="uid_no"
            value={formData.uid_no}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="room_no">Room No:</label>
          <input
            type="text"
            id="room_no"
            name="room_no"
            value={formData.room_no}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="student_name">Name of Student:</label>
          <input
            type="text"
            id="student_name"
            name="student_name"
            value={formData.student_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Add the remaining fields as needed in a similar format */}
        
        <div className="form-group">
          <input type="submit" value="Submit Application" />
        </div>
      </form>
    </div>
  );
};

export default Page;