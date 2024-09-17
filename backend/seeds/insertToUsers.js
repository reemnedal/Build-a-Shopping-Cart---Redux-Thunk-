// insertUser.js

const pool = require('../config/db');

const insertUser = async () => {
  const query = `
INSERT INTO users (username, password, email) 
VALUES ('sami', 'password', 'sami@example.com');

  `;


  
  
  try {
    await pool.query(query);
    console.log('User inserted successfully');
  } catch (error) {
    console.error('Error inserting user:', error);
  }
};

// Call the function
insertUser('john_doe', 'password123', 'john@example.com');
