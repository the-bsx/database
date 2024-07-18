import connection from "./server.js";

const createUser = (username, email, age) => {
    const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    connection.query(query, [username, email, age], (err, results) => {
      if (err) {
        console.error('Error inserting user: ' + err.stack);
      } else {
        console.log('User inserted successfully', results.insertId);
      }
    });
  };


  const getUsers = () => {
    const query = 'SELECT * FROM users';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching users: ' + err.stack);
      } else {
        console.log('Users:', results);
      }
    });
  };

  const updateUser = (id, username, email, password) => {
    const query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
    connection.query(query, [username, email,password, id], (err, results) => {
      if (err) {
        console.error('Error updating user: ' + err.stack);
      } else {
        console.log('User updated successfully');
      }
    });
  };

  const deleteUser = (id) => {
    const query = 'DELETE FROM users WHERE id = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error deleting user: ' + err.stack);
      } else {
        console.log('User deleted successfully');
      }
    });
  };

  // Test the functions
createUser('John Doe', 'john@example.com', 30);
// updateUser(1, 'Jane Doe', 'jane@example.com', 25);
getUsers();
// deleteUser(1);

setTimeout(() => {
    connection.end();
  }, 2000);