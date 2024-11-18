"use client";

import React, { useState } from "react";
import "./page.css"; // Import the CSS file
import { useRouter } from "next/navigation"; // Corrected import
import Image from "next/image";

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
    foundation_month_year: "",
    foundation_marks: "",
    foundation_percentage: "",
    foundation_average: "",
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
    fee_ref_no: "",
    fee_date: "",
    fee_bank_branch: "",
    fee_amount: "",
    donor_name: "", // Added new field
    donor_address: "", // Added new field
    donor_mobile: "", // Added new field
    donor_email: "", // Added new field
  });

  const [successMessage, setSuccessMessage] = useState(""); // State to show success message
  const router = useRouter(); // useRouter for navigation

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
        "https://forms-backend-hanl.onrender.com/api/v1/forms/create/",
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

      // Set success message and redirect after a short delay
      setSuccessMessage("Form submitted successfully!");
      setTimeout(() => {
        router.push("/"); // Redirect to home after 2 seconds
      }, 2000);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="container">
      <div
        className="header-info"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap", // Ensures responsiveness on smaller screens
          marginBottom: "20px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        {/* <img
          src="/parmarthlogo.png"
          alt="Parmarth Seva Samiti Logo"
          style={{
            width: "100px",
            height: "auto",
            marginRight: "15px",
          }}
        /> */}
        <Image
          src="/parmarthlogo.png"
          alt="Parmarth Seva Samiti Logo"
          width={100}
          height={100}
          style={{
            height: "auto",
            marginRight: "15px",
          }}
          priority={false}
        />
        <div>
          <h2 style={{ color: "#2c3e50", fontSize: "24px", margin: "0" }}>
            PARMARTH SEVA SAMITI
          </h2>
          <p style={{ color: "#34495e", fontSize: "14px", margin: "5px 0" }}>
            B-22 Kalyani Kendra, Shiv Vallabh Road, Ashokvan in front of
            Saurashtra Patel Hall, Hanuman Tekadi, Borivali East, Mumbai 400066.
          </p>
          <p style={{ color: "#34495e", fontSize: "14px", margin: "5px 0" }}>
            Email:{" "}
            <a
              href="mailto:parmathgirlshostel05@gmail.com"
              style={{ color: "#2980b9", textDecoration: "none" }}
            >
              parmathgirlshostel05@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div
        className="admission-info"
        style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
      >
        <h3
          style={{ color: "#16a085", fontSize: "20px", marginBottom: "10px" }}
        >
          Required Documents and Payment Details for Admission
        </h3>
        <h4 style={{ color: "#e67e22", fontSize: "18px", marginBottom: "8px" }}>
          Document Requirements
        </h4>
        <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
          <li>
            <strong>Professional Certification Documents</strong>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Articleship Registration Documentation</li>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Attested/true copy of Articleship Registration Letter</li>
                <li>Must be attested by Principal</li>
                <li>If not yet received, submit immediately upon receipt</li>
              </ul>
              <li>ICAI Forms</li>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  Attested/true copy of Form No. 102 with ICAI acknowledgment
                </li>
                <li>
                  Attested/true copy of Form No. 103 with ICAI acknowledgment
                </li>
                <li>
                  Form No. 109 with ICAI acknowledgment (required only for
                  articleship transfers)
                </li>
              </ul>
              <li>Professional Practice Documentation</li>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  Letter from Chartered Accountant Firm in prescribed format
                </li>
              </ul>
            </ul>
          </li>
          <li>
            <strong>Personal Documentation</strong>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Identity and Age Verification</li>
              <ul style={{ paddingLeft: "20px" }}>
                <li>Attested/true copy of Aadhaar Card or PAN Card</li>
              </ul>
              <li>Photographs</li>
              <ul style={{ paddingLeft: "20px" }}>
                <li>3 recent color photographs</li>
                <li>Size: 3.5 cm x 2.5 cm</li>
                <li>Must be submitted in an envelope</li>
              </ul>
              <li>Academic Records</li>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  Photocopies of mark sheets from all attempted examinations
                </li>
                <li>Cancelled cheque from student&apos;s personal bank account</li>
              </ul>
            </ul>
          </li>
          <li>
            <strong>Medical Documentation</strong>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Health Records</li>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  Current medical fitness certificate from practicing doctor
                </li>
                <li>Blood group report</li>
              </ul>
            </ul>
          </li>
        </ul>

        <h4 style={{ color: "#e67e22", fontSize: "18px", marginBottom: "8px" }}>
          Fee Structure
        </h4>
        <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
          <li>
            <strong>One-Time Payments</strong>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Application Processing Fee: ₹1,000 (Non-refundable)</li>
              <li>
                Security Deposit: ₹20,000 (Interest-free refundable deposit)
              </li>
            </ul>
          </li>
          <li>
            <strong>Regular Payments</strong>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Hostel Fees: ₹48,000 (₹8,000 per month for 6 months)</li>
              <li>Insurance Charges: As applicable</li>
            </ul>
          </li>
        </ul>

        <h4 style={{ color: "#e67e22", fontSize: "18px", marginBottom: "8px" }}>
          Payment Details
        </h4>
        <p>Bank Account Information</p>
        <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
          <li>Account Name: Parmarth Seva Samiti</li>
          <li>Account Number: 2081234226425555</li>
          <li>Bank Name: Au Small Finance Bank</li>
          <li>IFSC Code: AUBL0002342</li>
          <li>Branch: SV Road, Goregaon West</li>
        </ul>

        <p style={{ fontSize: "14px", color: "#34495e" }}>
          For any queries regarding payments or documentation, please contact
          the admission office of Parmarth Seva Samiti.
        </p>
        <p style={{ fontSize: "14px", color: "#e74c3c" }}>
          <strong>Note:</strong> All fees and requirements are subject to
          change. Please verify current rates and requirements with the
          institution before making any payments.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
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

        <h3>Details of Student&apos;s Bank</h3>
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
            Present C.A. Firm&apos;s Name / College Name:
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
          <label htmlFor="guardian_name">Name of Local Guardian:</label>
          <input
            type="text"
            id="guardian_name" // Updated to match formData
            name="guardian_name" // Updated to match formData
            value={formData.guardian_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guardian_address">Address:</label>
          <textarea
            id="guardian_address" // Updated to match formData
            name="guardian_address" // Updated to match formData
            value={formData.guardian_address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="guardian_mobile">Mobile No:</label>
          <input
            type="tel"
            id="guardian_mobile" // Updated to match formData
            name="guardian_mobile" // Updated to match formData
            value={formData.guardian_mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guardian_email">Email ID:</label>
          <input
            type="email"
            id="guardian_email" // Updated to match formData
            name="guardian_email" // Updated to match formData
            value={formData.guardian_email}
            onChange={handleChange}
            required
          />
        </div>

        <h3>DETAILS OF EXAMINATION PASSED</h3>
        <div className="table-container">
          <table className="table-1">
            <tr className="heading">
              <th>Examination</th>
              <th>Month and Year</th>
              <th>Marks</th>
              <th>Percentage (%)</th>
              <th>Average (%)</th>
            </tr>
            <tr>
              <td colSpan={5}>CPT Syllabus Type - Old</td>
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
              <td colSpan={5}>IPCC Syllabus - Old</td>
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
        </div>

        <h3>Details of CA Final Exam</h3>
        <div className="table-container">
          <table className="table-2">
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
        </div>
        <h3>Recommendation by Any Member of Parmarth / Prominent Person</h3>
        <div className="form-group">
          <label htmlFor="donor_name">Name of Donor:</label>
          <input
            type="text"
            id="donor_name" // Changed to donor_name
            name="donor_name" // Kept as donor_name
            value={formData.donor_name} // Kept as formData.donor_name
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="donor_address">Address of Donor:</label>
          <textarea
            id="donor_address" // Changed to donor_address
            name="donor_address" // Kept as donor_address
            value={formData.donor_address} // Kept as formData.donor_address
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="donor_mobile">Mobile No:</label>
          <input
            type="tel"
            id="donor_mobile" // Changed to donor_mobile
            name="donor_mobile" // Kept as donor_mobile
            value={formData.donor_mobile} // Kept as formData.donor_mobile
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="donor_email">Email ID:</label>
          <input
            type="email"
            id="donor_email" // Changed to donor_email
            name="donor_email" // Kept as donor_email
            value={formData.donor_email} // Kept as formData.donor_email
            onChange={handleChange}
          />
        </div>

        <h3>DETAILS OF PAYMENT (APPLICATION PROCESSING FEE)</h3>
        <div className="table-container">
          <table>
            <tr className="heading">
              <th>FEES REFERENCE NO.</th>
              <th>DATED</th>
              <th>NAME OF BANK AND BRANCH</th>
              <th>AMOUNT(RS)</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="fee_ref_no"
                  value={formData.fee_ref_no}
                  onChange={handleChange}
                />
              </td>

              <td>
                <input
                  type="text"
                  name="fee_date"
                  value={formData.fee_date}
                  onChange={handleChange}
                />
              </td>

              <td>
                <input
                  type="text"
                  name="fee_bank_branch"
                  value={formData.fee_bank_branch}
                  onChange={handleChange}
                />
              </td>

              <td>
                <input
                  type="text"
                  name="fee_amount"
                  value={formData.fee_amount}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </table>
        </div>
        <h3>Declaration</h3>
        <div>
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
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "20px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Submit Application
          </button>
        </div>
      </form>

      {/* Success message */}
      {successMessage && (
        <div style={{ marginTop: "20px", color: "green", fontWeight: "bold" }}>
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Page;
