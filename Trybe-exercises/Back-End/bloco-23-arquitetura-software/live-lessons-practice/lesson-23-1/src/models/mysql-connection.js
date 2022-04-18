const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'xx2578xx',
    database: 'model_database',
    port: 3306
})

module.exports = connection;