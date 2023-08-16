const express = require('express')
const app = express()
const configureDB = require('./cofig/database')
const router = require('./cofig/routes')

app.use(express.json())
configureDB()
app.use(router)


app.listen(3007, function(){
    console.log('server runs', 3007)
})