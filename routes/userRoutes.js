const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

const userController = new UserController()

router.get('/', async (req, res) => {
    let users = await userController.readAll()
    return res.json(users)
})

router.get('/user/:id', async (req, res) => {
    const id = req.params.id
    let user = await userController.readById(id)
    return  res.json(user)
})

router.post('/user/create', async (req, res) => {
    const data = req.body
    let newUser = await userController.create('users', data)
    return res.json(newUser)
})

router.put('/user/edit/:id', async (req, res) => {
    const id = req.params.id
    let data = req.body
    let result = await userController.update('users',data,id)
    return res.json(result)
})

router.delete('/user/delete/:id', async (req, res) => {
    const id = req.params.id
    let result = await userController.delete('users',id)
    return res.json(result)
})

module.exports = router