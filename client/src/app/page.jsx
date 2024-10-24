"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const [formData, setFormData] = useState(null); // State to hold the form data
  const [isLoading, setIsLoading] = useState(true); // State for loading

  const router = useRouter(); // useRouter for navigation

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch(`http://localhost:5500/api/v1/forms/readall/`);
        if (!response.ok) {
          throw new Error("Failed to fetch form data");
        }
        const data = await response.json();
        setFormData(data); // Store the data
        setIsLoading(false); // Turn off the loading state
      } catch (error) {
        console.error("Error fetching form:", error);
        setIsLoading(false); // Handle loading state on error
      }
    };

    fetchForm();
  }, []);

  // Function to handle deletion of a form
  const handleDelete = async (formNo) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this form?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5500/api/v1/forms/delete/${formNo}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // If the delete is successful, update the state to remove the deleted form
        setFormData((prevFormData) => prevFormData.filter((form) => form.form_no !== formNo));
        alert("Form deleted successfully"); // Show success alert
      } else {
        throw new Error("Failed to delete form");
      }
    } catch (error) {
      console.error("Error deleting form:", error);
      alert("Error deleting form. Please try again."); // Show error alert
    }
  };

  // Function to handle edit, navigate to edit page
  const handleEdit = (formNo) => {
    router.push(`/edit/${formNo}`); // Navigate to the edit page with the form number
  };

  if (isLoading) {
    return <div>Loading...</div>; // Display loading while data is fetched
  }

  return (
    <div className="table-container" role="region" tabIndex="0">
      <div className="table-header flex justify-between px-10">
        {/* Header for the table */}
        <h2 className="csscap text-xl">List of Forms</h2>
        <Link href={"/Create"}>
          <button className="create-btn">Create New</button>
        </Link>
      </div>

      <table className="data-table">
        <caption>Form Details</caption> {/* <caption> must be inside <table> */}
        <thead>
          <tr>
            <th>Form No</th>
            <th>Registered Date</th>
            <th>Student Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData && formData.length > 0 ? (
            formData.map((form) => (
              <tr key={form.form_no}>
                <td>{form.form_no}</td>
                <td>{new Date(form.reg_date).toLocaleDateString()}</td>
                <td>{form.student_name}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(form.form_no)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(form.form_no)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No forms available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
