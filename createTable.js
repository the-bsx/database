import connection from "./server.js";
const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
   id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`;

connection.query(createTableQuery, (err, results) => {
    if(err) {
        console.log("error creating table:" +err.stack);
    }else{
        console.log("table created sucessfully");
    }
    connection.end();
})