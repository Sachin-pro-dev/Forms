const express = require('express');
const { client } = require('../database/database');
const router = express.Router();

// Assuming form_number is passed as a URL parameter
router.get('/:form_number', async (req, res) => {
    const { form_number } = req.params; // Use req.params instead of req.body

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
            return res.status(404).json({ message: 'No form found with the given registration number' });
        }

        res.status(200).json(result.rows[0]); // Return the first matching row
    } catch (error) {
        console.error('Error during form retrieval:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = { readRouter: router };
