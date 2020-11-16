const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')




//! Load Config
dotenv.config({path:'./config/config.env'})



const app =express()


// Logging
if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'))
}


//! Routes 
app.use('/search',require('./routes/Search'))
const PORT = process.env.PORT || 5000





app.listen(
    PORT, 
    console.log(`Server running is ${process.env.NODE_ENV} mode on port ${PORT}`))
    