const mysql = require('mysql');	// use mysql database

// Create connection
const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'inventory'
});

// Connect to database
conn.connect((err) => {
	if (err) throw err;
	console.log('MySQL connected...');
});

module.exports = conn;