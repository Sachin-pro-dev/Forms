"use client";

// import React, { useState } from 'react';


import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    formNo: '',
    regDate: '',
    uidNo: '',
    roomNo: '',
    status: '',
    studentName: '',
    dob: '',
    age: '',
    gender: '',
    bloodGroup: '',
    mobile: '',
    email: '',
    seatType: '',
    aadhaar: '',
    pan: '',
    bankAccountName: '',
    bankName: '',
    branch: '',
    accountNo: '',
    ifsc: '',
    registrationNo: '',
    articleshipFrom: '',
    collegeName: '',
    address: '',
    officeTel: '',
    officeEmail: '',
    pcaName: '',
    pcaMobile: '',
    pcaEmail: '',
    parentName: '',
    parentAddress: '',
    parentMobile: '',
    parentEmail: '',
    occupation: '',
    income: '',
    guardianName: '',
    guardianAddress: '',
    guardianMobile: '',
    guardianEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send formData to the backend or process it here
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
          <label htmlFor="formNo">FORM NO:</label>
          <input type="text" id="formNo" name="formNo" value={formData.formNo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="regDate">REG. DATE:</label>
          <input type="date" id="regDate" name="regDate" value={formData.regDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="uidNo">UID NO:</label>
          <input type="text" id="uidNo" name="uidNo" value={formData.uidNo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="roomNo">ROOM NO.:</label>
          <input type="text" id="roomNo" name="roomNo" value={formData.roomNo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="status">STATUS:</label>
          <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} />
        </div>

        <h3>APPLICATION FORM FOR NEW ADMISSION – OCT-2024 TO MARCH-2025</h3>
        <p>Please consider my application for new admission in:</p>

        <h3>Details of Student</h3>
        <div className="form-group">
          <label htmlFor="studentName">Name of Student:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group:</label>
          <input type="text" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No:</label>
          <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="seatType">Seat Type:</label>
          <input type="text" id="seatType" name="seatType" value={formData.seatType} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="aadhaar">Aadhaar Card No:</label>
          <input type="number" id="aadhaar" name="aadhaar" value={formData.aadhaar} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="pan">PAN Card No:</label>
          <input type="text" id="pan" name="pan" value={formData.pan} onChange={handleChange} required />
        </div>

        <h3>Details of Student's Bank</h3>
        <div className="form-group">
          <label htmlFor="bankAccountName">Name in the Bank Account:</label>
          <input
            type="text"
            id="bankAccountName"
            name="bankAccountName"
            value={formData.bankAccountName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bankName">Bank Name:</label>
          <input type="text" id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="branch">Branch Name:</label>
          <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="accountNo">Account No:</label>
          <input type="number" id="accountNo" name="accountNo" value={formData.accountNo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="ifsc">IFSC Code:</label>
          <input type="text" id="ifsc" name="ifsc" value={formData.ifsc} onChange={handleChange} required />
        </div>

        <h3>Details of Articleship / Admission in College</h3>
        <div className="form-group">
          <label htmlFor="registrationNo">Registration No:</label>
          <input
            type="text"
            id="registrationNo"
            name="registrationNo"
            value={formData.registrationNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="articleshipFrom">Articleship Period From To:</label>
          <input
            type="text"
            id="articleshipFrom"
            name="articleshipFrom"
            value={formData.articleshipFrom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegeName">Present C.A. Firm's Name / College Name:</label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="officeTel">Office Telephone No:</label>
          <input type="tel" id="officeTel" name="officeTel" value={formData.officeTel} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="officeEmail">Office Email ID:</label>
          <input type="email" id="officeEmail" name="officeEmail" value={formData.officeEmail} onChange={handleChange} required />
        </div>

        <h3>Details of Parent</h3>
        <div className="form-group">
          <label htmlFor="parentName">Parent/Guardian Name:</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="parentAddress">Parent Address:</label>
          <textarea id="parentAddress" name="parentAddress" value={formData.parentAddress} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="parentMobile">Parent Mobile No:</label>
          <input type="tel" id="parentMobile" name="parentMobile" value={formData.parentMobile} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="parentEmail">Parent Email ID:</label>
          <input type="email" id="parentEmail" name="parentEmail" value={formData.parentEmail} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Parent Occupation:</label>
          <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="income">Income:</label>
          <input type="number" id="income" name="income" value={formData.income} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <input type="submit" value="Submit Application" />
        </div>
      </form>
    </div>
  );
};

export default Page;
