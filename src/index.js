const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Users = require('./models/Users')

// Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ejs settings
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/users', async(req, res) =>{
    try{
        let data = await Users.find()
        console.log(data)
        res.send(data)
    }catch(err){
        res.status(400).json({err:'Error'})
    }

})

app.post('/user', async(req, res) =>{
    try{
        let data = await Users.create(req.body)
        console.log(data)
        res.send(data)

    }catch(err){
        res.status(400).json({err:err})
    }

})

app.listen(9000, () =>{
    console.log('The server is ON')
})