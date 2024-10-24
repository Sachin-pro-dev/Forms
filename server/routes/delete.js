const express = require('express');
const { client } = require('../database/database');
const router = express.Router();

router.delete('/:form_number', async (req, res) => {
    const { form_number } = req.params; // Use req.params to get form_number from URL

    try {
        // Basic validation
        if (!form_number) {
            return res.status(400).json({ message: 'Missing required form_number' });
        }

        const query = `
            DELETE FROM admission_form WHERE form_no = $1 RETURNING *
        `;

        const values = [form_number];

        const result = await client.query(query, values);

        // Check if any record was deleted
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'No form found with the given form_number to delete' });
        }

        res.status(200).json({ message: 'Form deleted successfully', deletedForm: result.rows[0] });
    } catch (error) {
        console.error('Error during form deletion:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = { deleteRouter: router };
