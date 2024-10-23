const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const {dbConnection} = require('./database/database');

app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;

// app.use('/api/v1/forms/create');
// app.use('/api/v1/forms/read');
// app.use('/api/v1/forms/update');
// app.use('/api/v1/forms/delete');


(async () => {
    try {
        await dbConnection(); // Create the Users table
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit the process with a failure code
    }
})();