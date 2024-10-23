const express = require('express');
const { client } = require('../database/database');
const router = express.Router();

// Assuming form_number is passed as a URL parameter
router.put('/:form_number', async (req, res) => {
    const { form_number } = req.params; // Use req.params to get the form_number from the URL
    const {
        reg_date,
        uid_no,
        room_no,
        status,
        student_name,
        dob,
        age,
        gender,
        blood_group,
        mobile,
        email,
        seat_type,
        aadhaar,
        pan,
        bank_account_name,
        bank_name,
        branch,
        account_no,
        ifsc,
        articleship_from_to,
        college_name,
        address,
        office_tel,
        office_email,
        pca_name,
        pca_mobile,
        pca_email,
        parent_name,
        parent_address,
        parent_mobile,
        parent_email,
        occupation,
        income,
        guardian_name,
        guardian_address,
        guardian_mobile,
        guardian_email,
        cpt_month_year,
        cpt_marks,
        cpt_percentage,
        cpt_average,
        foundation_month_year,
        foundation_marks,
        foundation_percentage,
        foundation_average,
        ipcc_month_year,
        ipcc_marks,
        ipcc_percentage,
        ipcc_average,
        group1_month_year,
        group1_marks,
        group1_percentage,
        group1_average,
        group2_month_year,
        group2_marks,
        group2_percentage,
        group2_average,
        final_group1_month_year,
        final_group2_month_year
    } = req.body;

    try {
        // Basic validation
        if (!form_number) {
            return res.status(400).json({ message: 'Missing required form_number' });
        }

        // Update query
        const query = `
            UPDATE admission_form SET 
                reg_date = $1,
                uid_no = $2,
                room_no = $3,
                status = $4,
                student_name = $5,
                dob = $6,
                age = $7,
                gender = $8,
                blood_group = $9,
                mobile = $10,
                email = $11,
                seat_type = $12,
                aadhaar = $13,
                pan = $14,
                bank_account_name = $15,
                bank_name = $16,
                branch = $17,
                account_no = $18,
                ifsc = $19,
                articleship_from_to = $20,
                college_name = $21,
                address = $22,
                office_tel = $23,
                office_email = $24,
                pca_name = $25,
                pca_mobile = $26,
                pca_email = $27,
                parent_name = $28,
                parent_address = $29,
                parent_mobile = $30,
                parent_email = $31,
                occupation = $32,
                income = $33,
                guardian_name = $34,
                guardian_address = $35,
                guardian_mobile = $36,
                guardian_email = $37,
                cpt_month_year = $38,
                cpt_marks = $39,
                cpt_percentage = $40,
                cpt_average = $41,
                foundation_month_year = $42,
                foundation_marks = $43,
                foundation_percentage = $44,
                foundation_average = $45,
                ipcc_month_year = $46,
                ipcc_marks = $47,
                ipcc_percentage = $48,
                ipcc_average = $49,
                group1_month_year = $50,
                group1_marks = $51,
                group1_percentage = $52,
                group1_average = $53,
                group2_month_year = $54,
                group2_marks = $55,
                group2_percentage = $56,
                group2_average = $57,
                final_group1_month_year = $58,
                final_group2_month_year = $59
            WHERE form_no = $60
        `;

        const values = [
            reg_date, uid_no, room_no, status, student_name, dob, age, gender, blood_group, mobile, email, seat_type,
            aadhaar, pan, bank_account_name, bank_name, branch, account_no, ifsc, articleship_from_to,
            college_name, address, office_tel, office_email, pca_name, pca_mobile, pca_email, parent_name, parent_address,
            parent_mobile, parent_email, occupation, income, guardian_name, guardian_address, guardian_mobile, guardian_email,
            cpt_month_year, cpt_marks, cpt_percentage, cpt_average, foundation_month_year, foundation_marks, foundation_percentage,
            foundation_average, ipcc_month_year, ipcc_marks, ipcc_percentage, ipcc_average, group1_month_year, group1_marks,
            group1_percentage, group1_average, group2_month_year, group2_marks, group2_percentage, group2_average,
            final_group1_month_year, final_group2_month_year,
            form_number // This is the last value for the WHERE clause
        ];

        const result = await client.query(query, values);

        // Check if any record was updated
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'No form found with the given form number' });
        }

        res.status(200).json({ message: 'Form updated successfully' });
    } catch (error) {
        console.error('Error during form update:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = { updateRouter: router };
