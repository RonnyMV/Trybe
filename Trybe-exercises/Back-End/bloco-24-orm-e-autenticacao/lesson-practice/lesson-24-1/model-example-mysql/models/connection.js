const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    user: 'root',
    password: 'xx2578xx',
    host: 'localhost',
    database: 'model_example'
})

module.exports = connection;