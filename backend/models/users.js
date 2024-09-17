// createTables.js

// Import the database pool from config
const pool = require('../config/db');

// Define the function to create the 'products' table
const createUsersTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      email  VARCHAR(255) NOT NULL
    );
  `;

  try {
    // Execute the query to create the table
    await pool.query(query);
    console.log('users table created or already exists');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
};

// Initialize the table creation process
const init = async () => {
  await createUsersTable();
  process.exit(); // Exit the process once the table is created
};

// Run the initialization
init();
