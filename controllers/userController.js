const db = require('../database/database')

class UserController {
    async readAll() {
        const users = await db.query('select * from users')
        return users
    }

    async readById(id) {
        const user = await db.query('select * from users where id = ?', id)
        return user
    }

    async create(table, data) {
        const result = await db.insert(table,data)
        return result
    }

    async update(table, data, id) {
        const result = await db.update(table,data,id)
        return result
    }

    async delete(table, id) {
        const result = await db.delet(table,id)
        return result
    }
}

module.exports = UserController