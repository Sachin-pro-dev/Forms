"use client";

import React, { useState, useEffect } from "react";
import "./Page.css"; // Import the CSS file
import { useParams } from "next/navigation"; // Corrected import

const Page = () => {
  const params = useParams(); // Directly use the useParams hook
  const { form_no } = params; // Get form_no from dynamic route params
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
    donor_email: "" // Added new field
});

  useEffect(() => {
    if (form_no) {
      const fetchFormDetails = async () => {
        try {
          const response = await fetch(
            `http://localhost:5500/api/v1/forms/read/${form_no}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch form details");
          }
          const data = await response.json();
          setFormData(data); // Populate the form data
        } catch (error) {
          console.error("Error fetching form details:", error);
        }
      };

      fetchFormDetails();
    }
  }, [form_no]);

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
        `http://localhost:5500/api/v1/forms/update/${form_no}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update form");
      }

      alert("Form updated successfully");
      router.push("/"); // Redirect back to the list after update
    } catch (error) {
      console.error("Error updating form:", error);
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
          <label htmlFor="regDate">REG. DATE:</label>
          <input
            type="text"
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
            type="text"
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

        <table>
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

        <h3>Details of CA Final Exam</h3>
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
                name="final_group2_month_year"
                value={formData.fee_ref_no}
                onChange={handleChange}
              />
            </td>

            <td>
              <input
                type="text"
                name="final_group2_month_year"
                value={formData.fee_date}
                onChange={handleChange}
              />
            </td>

            <td>
              <input
                type="text"
                name="final_group2_month_year"
                value={formData.fee_bank_branch}
                onChange={handleChange}
              />
            </td>

            <td>
              <input
                type="text"
                name="final_group2_month_year"
                value={formData.fee_amount}
                onChange={handleChange}
              />
            </td>
          </tr>
        </table>

        {/*<h3>Declaration</h3>
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
        </div>*/}

        {/* Declaration Section */}
        <div className="declaration-section">
          <h3>DECLARATION</h3>
          <p>
            1. I declare that the information appearing in the form is true and
            correct to the best of my knowledge and belief.
            <br />
            2. I further declare that I will abide by all the rules and
            regulations of the institution.
            <br />
            3. In case of any change in the above information, I will inform the
            institution immediately in writing within three days.
            <br />
            4. I confirm that I am pursuing and have passed both groups of
            exams.
            <br />
            5. I have registered/applied for registration as an articled student
            (Form Nos. 102/103/109).
            <br />
            6. I confirm that I am doing articleship in the Mumbai region, and
            on change of articleship from the Mumbai region during the course of
            the term, I will vacate the hostel immediately.
            <br />
          </p>

          {/* <div className="form-group">
            <label>
              <input type="checkbox" required /> I have read and agree to the
              declaration terms above.
            </label>
          </div> */}

          <h3>DOCUMENTS TO BE SUBMITTED WITH ADMISSION FORM</h3>
          <ul>
            <li>
              1. Attested/True copy of the Articleship registration letter, if
              received.
            </li>
            <li>
              2. Attested/True copy of Form Nos. 102 and 103 with acknowledgment
              by ICAI.
            </li>
            <li>
              3. Attested/True copy of Form No.109 with acknowledgment by ICAI
              (in case of transfer).
            </li>
            <li>
              4. Self declaration in the prescribed form duly signed by the
              applicant.
            </li>
            <li>
              5. Letter from donor in the prescribed format, if applied on
              donor’s seat.
            </li>
            <li>
              6. Applications in donor category without donor letter may not be
              considered for admission.
            </li>
            <li>
              7. Undertaking from local guardian with photo and PAN card copy.
            </li>
            <li>
              8. Letter from Chartered Accountant firm in the prescribed format.
            </li>
            <li>
              9. Photo copies of mark sheets of all exams appeared and cancelled
              cheque of student’s bank account.
            </li>
            <li>
              10. Attested/True copy of Aadhaar Card or PAN Card for age proof.
            </li>
            <li>
              11. Latest medical fitness certificate from a doctor and blood
              group report.
            </li>
            <li>12. 3 recent color photographs (3.5 cm x 2.5 cm).</li>
            <li>
              13. Letter of admission from college/institution (for non-CA
              students).
            </li>
          </ul>

          <h3>FOR OFFICE USE ONLY</h3>
          <p>Remarks of House Chancellor</p>
          <div className="form-group">
            <label htmlFor="houseChancellorRemarks">Remarks:</label>
            <input
              type="text"
              id="houseChancellorRemarks"
              name="houseChancellorRemarks"
            />
          </div>

          <h3>Details of Payment (Hostel Fee)</h3>
          <div className="form-group">
            <label htmlFor="payOrderNo">Pay Order No:</label>
            <input type="text" id="payOrderNo" name="payOrderNo" />
          </div>
          <div className="form-group">
            <label htmlFor="paymentDate">Dated:</label>
            <input type="text" id="paymentDate" name="paymentDate" />
          </div>
          <div className="form-group">
            <label htmlFor="bankDetails">Name of Bank and Branch:</label>
            <input type="text" id="bankDetails" name="bankDetails" />
          </div>
          <div className="form-group">
            <label htmlFor="feeAmount">Amount (Rs):</label>
            <input type="number" id="feeAmount" name="feeAmount" />
          </div>
        </div>

        <div className="form-group">
          <button
            onClick={() => window.print()}
            className="print"
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
            Print Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
