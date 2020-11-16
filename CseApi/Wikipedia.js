const CustomSearch = require('../functions/api')
const dotenv = require('dotenv')
const filterResponse = require('../functions/filterResponse')


//! Load Config
dotenv.config({path:'./config/config.env'})

const key = process.env.API_KEY
const id = process.env.Wikipedia


const Wikipedia = async (query,index=null) =>
{
    const response = await CustomSearch.get('',{
        params:{
            key:key,
            cx:id,
            q:query,
            start:index
        }})
    return await filterResponse(response)
}


module.exports = Wikipedia