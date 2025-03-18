const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Allow CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Or, specify allowed origins for security (e.g., frontend on localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Set up PostgreSQL client
const client = new Client({
    user: 'myuser',           // your DB username
    host: 'db',               // DB service name (as per Docker Compose)
    database: 'mydb',         // DB name
    password: 'mypassword',   // DB password
    port: 5432,               // DB port
});

// Connect to the database
client.connect()
    .then(() => console.log('Connected to the database'))
    .catch((error) => {
        console.error('Error connecting to the database:', error.stack);
        process.exit(1);  // Exit the process if connection fails
    });

// API endpoint to get users
app.get('/users', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM users');
        res.json(result.rows);  // Return data as JSON
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).send('Server Error');
    }
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(5000, () => {
    console.log('Backend running on port 5000');
});
