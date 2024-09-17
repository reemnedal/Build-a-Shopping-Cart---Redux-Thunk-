// createTables.js

// Import the database pool from config
const pool = require('../config/db');

// Define the function to create the 'products' table
const createProductsTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      description TEXT,
      category VARCHAR(100),
      image TEXT,
      rating_rate DECIMAL(3, 1),
      rating_count INTEGER
    );
  `;

  try {
    // Execute the query to create the table
    await pool.query(query);
    console.log('Products table created or already exists');
  } catch (error) {
    console.error('Error creating products table:', error);
  }
};

// Initialize the table creation process
const init = async () => {
  await createProductsTable();
  process.exit(); // Exit the process once the table is created
};

// Run the initialization
init();
