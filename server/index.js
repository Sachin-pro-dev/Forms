const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const { dbConnection } = require('./database/database');
const { createRouter } = require('./routes/create'); // Importing the create route
const { readRouter } = require('./routes/read');
const { updateRouter } = require('./routes/update');
const { readallRouter } = require('./routes/readall');

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// API Routes
app.use('/api/v1/forms/create', createRouter);
app.use('/api/v1/forms/read', readRouter);
app.use('/api/v1/forms/readall', readallRouter);
app.use('/api/v1/forms/update', updateRouter);
// app.use('/api/v1/forms/delete');

// Start the server and connect to the database
(async () => {
    try {
        await dbConnection(); // Initialize the database connection
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit the process with an error code
    }
})();
