import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bishal@999',
    database: 'store'
});

 connection.connect((err) =>{
    if (err) {
        console.error('error connecting:',+ err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

export default connection;