const mysql2 = require('mysql2')
const { db_host, db_port, db_user, db_password, db_name } = require('../config')

const connection  = mysql2.createConnection({
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_password,
    database: db_name
})

function query(sql, data) {
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

async function insert(tableName, data){
    try {
        await query(`insert into ${tableName}(??) values (?)`,[Object.keys(data), Object.values(data)])
        return {data, success:true}
    } catch (error) {
        return {error, success: false}
    }
}

async function update(tableName, data, id){
    try {
        await query(`update ${tableName} set ? where id = ?`,[data,id])
        return {data,id,success:true}
    } catch (error) {
        return {error, success:false}
    }
}

async function delet(tableName, id) {
    try {
        await query(`delete from ${tableName} where id = ?`, [id])
        return id
    } catch (error) {
        return error
    }
}

module.exports = {query,insert,update,delet}