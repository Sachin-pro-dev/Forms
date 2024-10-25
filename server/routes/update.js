const express = require('express');
const { client } = require('../database/database');
const router = express.Router();

router.put('/:form_number', async (req, res) => {
    const { form_number } = req.params;
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
        registration_no,
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
        foundation_month_year,
        foundation_marks,
        foundation_percentage,
        foundation_average,
        group1_month_year,
        group1_marks,
        group1_percentage,
        group1_average,
        group2_month_year,
        group2_marks,
        group2_percentage,
        group2_average,
        final_group1_month_year,
        final_group2_month_year,
        fee_ref_no,
        fee_date,
        fee_bank_branch,
        fee_amount,
        donor_name,         // New field
        donor_address,      // New field
        donor_mobile,       // New field
        donor_email         // New field
    } = req.body;

    try {
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
                registration_no = $20,
                articleship_from_to = $21,
                college_name = $22,
                address = $23,
                office_tel = $24,
                office_email = $25,
                pca_name = $26,
                pca_mobile = $27,
                pca_email = $28,
                parent_name = $29,
                parent_address = $30,
                parent_mobile = $31,
                parent_email = $32,
                occupation = $33,
                income = $34,
                guardian_name = $35,
                guardian_address = $36,
                guardian_mobile = $37,
                guardian_email = $38,
                foundation_month_year = $39,
                foundation_marks = $40,
                foundation_percentage = $41,
                foundation_average = $42,
                group1_month_year = $43,
                group1_marks = $44,
                group1_percentage = $45,
                group1_average = $46,
                group2_month_year = $47,
                group2_marks = $48,
                group2_percentage = $49,
                group2_average = $50,
                final_group1_month_year = $51,
                final_group2_month_year = $52,
                fee_ref_no = $53,
                fee_date = $54,
                fee_bank_branch = $55,
                fee_amount = $56,
                donor_name = $57,          
                donor_address = $58,      
                donor_mobile = $59,        
                donor_email = $60          
            WHERE form_no = $61
        `;

        const values = [
            reg_date, uid_no, room_no, status, student_name, dob, age, gender, blood_group, mobile, email, seat_type,
            aadhaar, pan, bank_account_name, bank_name, branch, account_no, ifsc, registration_no, articleship_from_to,
            college_name, address, office_tel, office_email, pca_name, pca_mobile, pca_email, parent_name, parent_address,
            parent_mobile, parent_email, occupation, income, guardian_name, guardian_address, guardian_mobile, guardian_email,
            foundation_month_year, foundation_marks, foundation_percentage, foundation_average,
            group1_month_year, group1_marks, group1_percentage, group1_average, group2_month_year,
            group2_marks, group2_percentage, group2_average, final_group1_month_year, final_group2_month_year,
            fee_ref_no, fee_date, fee_bank_branch, fee_amount,
            donor_name, donor_address, donor_mobile, donor_email, // New fields
            form_number // WHERE clause placeholder
        ];

        const result = await client.query(query, values);

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
