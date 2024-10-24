const express = require('express');
const { client } = require('../database/database');
const router = express.Router();

// Assuming form_number is passed as a URL parameter
router.get('/', async (req, res) => {

    try {
        const query = `
            SELECT * FROM admission_form
        `;

        const result = await client.query(query);

        // Check if any record is found
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No form found with the given registration number' });
        }

        res.status(200).json(result.rows); // Return the first matching row
    } catch (error) {
        console.error('Error during form retrieval:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = { readallRouter: router };
