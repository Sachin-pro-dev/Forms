import React from 'react';
import './Page.css';  // Import the CSS file

function Page() {
  return (
    <div className="table-container" role="region" tabIndex="0">
      <table className="data-table">
        <caption>List of Forms</caption>
        <thead>
          <tr>
            <th>Form No</th>
            <th>Registered Date</th>
            <th>Student Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>2024-10-23</td>
            <td>John Doe</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>54321</td>
            <td>2024-10-22</td>
            <td>Jane Smith</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>67890</td>
            <td>2024-10-21</td>
            <td>Sam Wilson</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Page;
