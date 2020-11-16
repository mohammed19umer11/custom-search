const axios = require('axios')
const dotenv = require('dotenv')

//! Load Config
dotenv.config({path:'./config/config.env'})
const url = process.env.URL
module.exports = axios.create(
    {
        baseURL : `${url}`,
    });