const express = require('express');
const { client } = require('../database/database');
const router = express.Router();

// Function to format date to dd-mm-yyyy
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
};

// Assuming form_number is passed as a URL parameter
router.get('/:form_number', async (req, res) => {
    const { form_number } = req.params;

    try {
        // Basic validation
        if (!form_number) {
            return res.status(400).json({ message: 'Missing required form_number' });
        }

        const query = `
            SELECT * FROM admission_form WHERE form_no = $1
        `;

        const values = [form_number];

        const result = await client.query(query, values);

        // Check if any record is found
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No form found with the given form number' });
        }

        // Format the date fields before sending the response
        const formData = result.rows[0];
        if (formData.reg_date) formData.reg_date = formatDate(formData.reg_date);
        if (formData.dob) formData.dob = formatDate(formData.dob);
        // Add more date fields here if needed

        res.status(200).json(formData); // Return the modified row
    } catch (error) {
        console.error('Error during form retrieval:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = { readRouter: router };
