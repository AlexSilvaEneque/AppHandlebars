const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const { port } = require('./config')
const router = require('./routes/userRoutes')

const app = express()

const hbs = handlebars.create({
    defaultLayout:false
    // pueden ir los helpers
})

app.engine('hbs', hbs.engine)
app.set('view engine','hbs')
app.set('views', 'views')


app.use(express.static(path.join(__dirname,"static")))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)


app.listen(port, () => {
    console.log('Servidor funcionando en ... http://localhost:'+port)
})