const express = require('express')
const app = express()
const path = require('path')
const hbs = require('handlebars')
const User = require('./Model/RegisterUser')
require('./Database/database')
const port = 3000 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser())

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

const dynamic_path = path.join(__dirname , "../templates/views")
const partial_path = path.join(__dirname , "../templates/partials")

app.set('view engine' , 'hbs')
app.set('views' , dynamic_path)

app.post("/register/users", async(req,res)=>{

    try {

        const { name,email,password } = req.body

        const user = new User({
            name,
            email,
            password
        })
    
        const users = await user.save()
    
        console.log(users);

        res.status(201).render('index')
        
    } catch (error) {
        res.status(401).send(`there is some error in the system while registering : ${error}`)
    }
})

app.post("/login/users", async(req,res)=>{

    try {

        const { email,password } = req.body

        const user = await User.findOne({email})

        console.log(user);

        if (user.password = password) {
            res.status(201).send("You have logged in successfully")
        }
        else{
            res.status(201).send("Your email or password is incorrect")
        } 
        
    } catch (error) {
        res.send(`there is some error in the system while registering : ${error}`)
    }
})

app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/login",(req,res)=>{
    res.render('login')
})

app.listen(port , ()=>{
    console.log(`this is the website live at port : ${port}`)
})

