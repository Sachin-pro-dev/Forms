"use client";

import React, { useState } from "react";
import "./Page.css"; // Import the CSS file

const Page = () => {
  const [formData, setFormData] = useState({
    reg_date: "",
    uid_no: "",
    room_no: "",
    status: "",
    student_name: "",
    dob: "",
    age: "",
    gender: "",
    blood_group: "",
    mobile: "",
    email: "",
    seat_type: "",
    aadhaar: "",
    pan: "",
    bank_account_name: "",
    bank_name: "",
    branch: "",
    account_no: "",
    ifsc: "",
    registration_no: "",
    articleship_from_to: "",
    college_name: "",
    address: "",
    office_tel: "",
    office_email: "",
    pca_name: "",
    pca_mobile: "",
    pca_email: "",
    parent_name: "",
    parent_address: "",
    parent_mobile: "",
    parent_email: "",
    occupation: "",
    income: "",
    guardian_name: "",
    guardian_address: "",
    guardian_mobile: "",
    guardian_email: "",
    cpt_month_year: "",
    cpt_marks: "",
    cpt_percentage: "",
    cpt_average: "",
    foundation_month_year: "",
    foundation_marks: "",
    foundation_percentage: "",
    foundation_average: "",
    ipcc_month_year: "",
    ipcc_marks: "",
    ipcc_percentage: "",
    ipcc_average: "",
    group1_month_year: "",
    group1_marks: "",
    group1_percentage: "",
    group1_average: "",
    group2_month_year: "",
    group2_marks: "",
    group2_percentage: "",
    group2_average: "",
    final_group1_month_year: "",
    final_group2_month_year: "",
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
      const response = await fetch(
        "http://localhost:5500/api/v1/forms/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const result = await response.json();
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting the form:", error);
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
          Email:{" "}
          <a href="mailto:parmathgirlshostel05@gmail.com">
            parmathgirlshostel05@gmail.com
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="formNo">FORM NO:</label>
          <input
            type="text"
            id="formNo"
            name="formNo"
            onChange={handleChange}
            value={formData.formNo}
          />
        </div>

        <div className="form-group">
          <label htmlFor="regDate">REG. DATE:</label>
          <input
            type="date"
            id="regDate"
            name="reg_date"
            onChange={handleChange}
            value={formData.reg_date}
          />
        </div>
        <div className="form-group">
          <label htmlFor="uidNo">UID NO:</label>
          <input
            type="text"
            id="uidNo"
            name="uid_no"
            onChange={handleChange}
            value={formData.uid_no}
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomNo">ROOM NO.:</label>
          <input
            type="text"
            id="roomNo"
            name="room_no"
            onChange={handleChange}
            value={formData.room_no}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">STATUS:</label>
          <input
            type="text"
            id="status"
            name="status"
            onChange={handleChange}
            value={formData.status}
          />
        </div>

        <h3>APPLICATION FORM FOR NEW ADMISSION – OCT-2024 TO MARCH-2025</h3>
        <p>Please consider my application for new admission in:</p>

        <h3>Details of Student</h3>
        <div className="form-group">
          <label htmlFor="studentName">Name of Student:</label>
          <input
            type="text"
            id="studentName"
            name="student_name"
            required
            onChange={handleChange}
            value={formData.student_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            required
            onChange={handleChange}
            value={formData.dob}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            required
            onChange={handleChange}
            value={formData.age}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            required
            onChange={handleChange}
            value={formData.gender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group:</label>
          <input
            type="text"
            id="bloodGroup"
            name="blood_group"
            required
            onChange={handleChange}
            value={formData.blood_group}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            required
            onChange={handleChange}
            value={formData.mobile}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="seatType">Seat Type:</label>
          <input
            type="text"
            id="seatType"
            name="seat_type"
            required
            onChange={handleChange}
            value={formData.seat_type}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadhaar">Aadhaar Card No:</label>
          <input
            type="number"
            id="aadhaar"
            name="aadhaar"
            required
            onChange={handleChange}
            value={formData.aadhaar}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pan">PAN Card No:</label>
          <input
            type="text"
            id="pan"
            name="pan"
            required
            onChange={handleChange}
            value={formData.pan}
          />
        </div>

        <h3>Details of Student's Bank</h3>
        <div className="form-group">
          <label htmlFor="bankAccountName">Name in the Bank Account:</label>
          <input
            type="text"
            id="bankAccountName"
            name="bank_account_name"
            required
            onChange={handleChange}
            value={formData.bank_account_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bankName">Bank Name:</label>
          <input
            type="text"
            id="bankName"
            name="bank_name"
            required
            onChange={handleChange}
            value={formData.bank_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="branch">Branch Name:</label>
          <input
            type="text"
            id="branch"
            name="branch"
            required
            onChange={handleChange}
            value={formData.branch}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountNo">Account No:</label>
          <input
            type="number"
            id="accountNo"
            name="account_no"
            required
            onChange={handleChange}
            value={formData.account_no}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ifsc">IFSC Code:</label>
          <input
            type="text"
            id="ifsc"
            name="ifsc"
            required
            onChange={handleChange}
            value={formData.ifsc}
          />
        </div>

        <h3>Details of Articleship / Admission in College</h3>
        <div className="form-group">
          <label htmlFor="registrationNo">Registration No:</label>
          <input
            type="text"
            id="registrationNo"
            name="registration_no"
            required
            onChange={handleChange}
            value={formData.registration_no}
          />
        </div>
        <div className="form-group">
          <label htmlFor="articleshipFrom">Articleship Period From To:</label>
          <input
            type="text"
            id="articleshipFrom"
            name="articleship_from_to"
            required
            onChange={handleChange}
            value={formData.articleship_from_to}
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegeName">
            Present C.A. Firm's Name / College Name:
          </label>
          <input
            type="text"
            id="collegeName"
            name="college_name"
            required
            onChange={handleChange}
            value={formData.college_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            required
            onChange={handleChange}
            value={formData.address}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="officeTel">Tel (Office):</label>
          <input
            type="tel"
            id="officeTel"
            name="office_tel"
            onChange={handleChange}
            value={formData.office_tel}
          />
        </div>
        <div className="form-group">
          <label htmlFor="officeEmail">Email ID:</label>
          <input
            type="email"
            id="officeEmail"
            name="office_email"
            required
            onChange={handleChange}
            value={formData.office_email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pcaName">
            Name of the Principal Chartered Accountant (PCA):
          </label>
          <input
            type="text"
            id="pcaName"
            name="pca_name"
            required
            onChange={handleChange}
            value={formData.pca_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pcaMobile">PCA Mobile No.:</label>
          <input
            type="tel"
            id="pcaMobile"
            name="pca_mobile"
            required
            onChange={handleChange}
            value={formData.pca_mobile}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pcaEmail">PCA Email ID:</label>
          <input
            type="email"
            id="pcaEmail"
            name="pca_email"
            required
            onChange={handleChange}
            value={formData.pca_email}
          />
        </div>

        <h3>Details of Parent</h3>
        <div className="form-group">
          <label htmlFor="parentName">Name of Father/Mother:</label>
          <input
            type="text"
            id="parentName"
            name="parent_name"
            required
            onChange={handleChange}
            value={formData.parent_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="parentAddress">Address:</label>
          <textarea
            id="parentAddress"
            name="parent_address"
            required
            onChange={handleChange}
            value={formData.parent_address}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="parentMobile">Mobile No:</label>
          <input
            type="tel"
            id="parentMobile"
            name="parent_mobile"
            required
            onChange={handleChange}
            value={formData.parent_mobile}
          />
        </div>
        <div className="form-group">
          <label htmlFor="parentEmail">Email ID:</label>
          <input
            type="email"
            id="parentEmail"
            name="parent_email"
            required
            onChange={handleChange}
            value={formData.parent_email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            required
            onChange={handleChange}
            value={formData.occupation}
          />
        </div>

        <div className="form-group">
          <label htmlFor="income">Gross Annual Income:</label>
          <input
            type="number"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Details of Local Guardian</h3>
        <div className="form-group">
          <label htmlFor="guardianName">Name of Local Guardian:</label>
          <input
            type="text"
            id="guardianName"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guardianAddress">Address:</label>
          <textarea
            id="guardianAddress"
            name="guardianAddress"
            value={formData.guardianAddress}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="guardianMobile">Mobile No:</label>
          <input
            type="tel"
            id="guardianMobile"
            name="guardianMobile"
            value={formData.guardianMobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guardianEmail">Email ID:</label>
          <input
            type="email"
            id="guardianEmail"
            name="guardianEmail"
            value={formData.guardianEmail}
            onChange={handleChange}
            required
          />
        </div>

        <table>
          <tr className="heading">
            <th>Examination</th>
            <th>Month and Year</th>
            <th>Marks</th>
            <th>Percentage (%)</th>
            <th>Average (%)</th>
          </tr>
          <tr>
            <td>CPT Syllabus Type - Old</td>
            <td>
              <input
                type="text"
                name="cpt_month_year"
                value={formData.cpt_month_year}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="cpt_marks"
                value={formData.cpt_marks}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="cpt_percentage"
                value={formData.cpt_percentage}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="cpt_average"
                value={formData.cpt_average}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>CPT/Foundation</td>
            <td>
              <input
                type="text"
                name="foundation_month_year"
                value={formData.foundation_month_year}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="foundation_marks"
                value={formData.foundation_marks}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="foundation_percentage"
                value={formData.foundation_percentage}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="foundation_average"
                value={formData.foundation_average}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>IPCC Syllabus - Old</td>
            <td>
              <input
                type="text"
                name="ipcc_month_year"
                value={formData.ipcc_month_year}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="ipcc_marks"
                value={formData.ipcc_marks}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="ipcc_percentage"
                value={formData.ipcc_percentage}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="ipcc_average"
                value={formData.ipcc_average}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>PCC/IPCC (Group-I)</td>
            <td>
              <input
                type="text"
                name="group1_month_year"
                value={formData.group1_month_year}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="group1_marks"
                value={formData.group1_marks}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="group1_percentage"
                value={formData.group1_percentage}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="group1_average"
                value={formData.group1_average}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>PCC/IPCC (Group-II)</td>
            <td>
              <input
                type="text"
                name="group2_month_year"
                value={formData.group2_month_year}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="group2_marks"
                value={formData.group2_marks}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="group2_percentage"
                value={formData.group2_percentage}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="group2_average"
                value={formData.group2_average}
                onChange={handleChange}
              />
            </td>
          </tr>
        </table>

        <h3>Details of CA Final Exam</h3>
        <table>
          <tr className="heading">
            <th>Examination</th>
            <th>Appear In (Month and Year)</th>
          </tr>
          <tr>
            <td>C.A. Final (Group-I)</td>
            <td>
              <input
                type="text"
                name="final_group1_month_year"
                value={formData.final_group1_month_year}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>C.A. Final (Group-II)</td>
            <td>
              <input
                type="text"
                name="final_group2_month_year"
                value={formData.final_group2_month_year}
                onChange={handleChange}
              />
            </td>
          </tr>
        </table>

        <h3>Recommendation by Any Member of Parmarth / Prominent Person</h3>
        <div className="form-group">
          <label htmlFor="donorName">Name of Donor:</label>
          <input
            type="text"
            id="donorName"
            name="donorName"
            value={formData.donorName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="donorAddress">Address of Donor:</label>
          <textarea
            id="donorAddress"
            name="donorAddress"
            value={formData.donorAddress}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="donorMobile">Mobile No:</label>
          <input
            type="tel"
            id="donorMobile"
            name="donorMobile"
            value={formData.donorMobile}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="donorEmail">Email ID:</label>
          <input
            type="email"
            id="donorEmail"
            name="donorEmail"
            value={formData.donorEmail}
            onChange={handleChange}
          />
        </div>

        <h3>Declaration</h3>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              id="declaration"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
              required
            />
            I declare that the information provided is true and correct to the
            best of my knowledge.
          </label>
        </div>

         <div className="form-group">
          <input type="submit" value="Submit Application" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  );
};

export default Page;