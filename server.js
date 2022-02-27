const express = require('express')
const path = require('path')
const { port } = require('./config')

const app = express()


app.use(express.static(path.join(__dirname,"static")))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(port, () => {
    console.log('Servidor funcionando en ... http://localhost:'+port)
})