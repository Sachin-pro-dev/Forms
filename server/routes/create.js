const express = require('express');
const { client } = require('../database/database');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
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
            donor_name,          
            donor_address,      
            donor_mobile,       
            donor_email         
        } = req.body;

        const query = `
            INSERT INTO admission_form (
                reg_date, uid_no, room_no, status, student_name, dob, age, gender, blood_group, mobile, email, 
                seat_type, aadhaar, pan, bank_account_name, bank_name, branch, account_no, ifsc, registration_no, 
                articleship_from_to, college_name, address, office_tel, office_email, pca_name, pca_mobile, pca_email, 
                parent_name, parent_address, parent_mobile, parent_email, occupation, income, guardian_name, 
                guardian_address, guardian_mobile, guardian_email, foundation_month_year, foundation_marks, 
                foundation_percentage, foundation_average, group1_month_year, group1_marks, group1_percentage, 
                group1_average, group2_month_year, group2_marks, group2_percentage, group2_average, 
                final_group1_month_year, final_group2_month_year, fee_ref_no, fee_date, fee_bank_branch, fee_amount,
                donor_name, donor_address, donor_mobile, donor_email
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, 
                $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, 
                $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56,
                $57, $58, $59, $60
            )
        `;

        const values = [
            reg_date, uid_no, room_no, status, student_name, dob, age, gender, blood_group, mobile, email, seat_type,
            aadhaar, pan, bank_account_name, bank_name, branch, account_no, ifsc, registration_no, articleship_from_to,
            college_name, address, office_tel, office_email, pca_name, pca_mobile, pca_email, parent_name, parent_address,
            parent_mobile, parent_email, occupation, income, guardian_name, guardian_address, guardian_mobile, guardian_email,
            foundation_month_year, foundation_marks, foundation_percentage, foundation_average, group1_month_year, 
            group1_marks, group1_percentage, group1_average, group2_month_year, group2_marks, group2_percentage, 
            group2_average, final_group1_month_year, final_group2_month_year, fee_ref_no, fee_date, fee_bank_branch, 
            fee_amount,
            donor_name, donor_address, donor_mobile, donor_email 
        ];

        await client.query(query, values);
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error during form creation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = { createRouter: router };
