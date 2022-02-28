const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

const userController = new UserController()

router.get('/', async (req, res) => {
    let users = await userController.readAll()
    return res.render('home',{users})
})

router.get('/userEdit/:id', async (req, res) => {
    const id = req.params.id
    let user = await userController.readById(id)
    let gender = user[0].genero
    return res.render('user',{user:user[0],male: gender == 'M',female: gender == 'F'})
})

router.get('/create', (req, res) => {
    return res.render('create')
})

router.post('/user/create', async (req, res) => {
    const data = req.body
    let newUser = await userController.create('users', data)
    if (newUser.success) {
        return res.redirect('/')
    } else {
        return res.render('create',{error:true,message: newUser.error.sqlMessage, data:data, male: data.genero=='M',female:data.genero=='F'})
    }
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