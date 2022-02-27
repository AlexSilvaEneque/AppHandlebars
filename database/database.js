const mysql2 = require('mysql2')
const { db_host, db_port, db_user, db_password, db_name } = require('../config')

const connection  = mysql2.createConnection({
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_password,
    database: db_name
})