const path = require('path')
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const {errorHandelr} = require('./middleware/error.middleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const app = express();

connectDB();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/goals' , require('./router/goal.routes'))
app.use('/api/users' , require('./router/user.routes'))

// Server FrontEnd

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*' , (req,res)=> res.sendFile(path.resolve(__dirname , '../' , 'frontend' , 'build' , 'index.html')))
}else{
    app.get('/' , (req,res)=> res.send('Please set to production'))
}
app.use(errorHandelr)

app.listen(port , ()=>{
    console.log(`Server is Running ${port}`.red.bold)
})