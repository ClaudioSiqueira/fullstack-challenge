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

app.get('/', async(req, res) =>{
    try{
        let data = await Users.find()
        res.render('index', {users:data, id:1})
    }catch(err){
        res.status(400).json({err:err})
    }

})


app.post('/user', async(req, res) =>{
    try{
        await Users.create(req.body)
        res.redirect('/')

    }catch(err){
        res.status(400).json({err:err})
    }

})

app.listen(9000, () =>{
    console.log('The server is ON')
})