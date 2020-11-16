const express = require('express')
const router = express.Router()

const Amazon = require('../CseApi/Amazon')
const Bing = require('../CseApi/Bing')
const Ebay = require('../CseApi/Ebay')
const Facebook = require('../CseApi/Facebook')
const Google = require('../CseApi/Google')
const Kijiji = require('../CseApi/Kijiji')
const Twitter = require('../CseApi/Twitter')
const Wikipedia = require('../CseApi/Wikipedia')
const Yahoo = require('../CseApi/Yahoo')
const Youtube = require('../CseApi/Youtube')


router.get('/',async(req,res)=>{
    if(!req.query.searchterm)
    {
        return res.status(400).json({
            error:"PLEASE ENTER THE QUERY TO SEARCH"
        })
    }
    else if(!req.query.websites)
    {
        return res.status(400).json({
            error:"PLEASE SELECT THE WEBSITES"
        })
    }
    try {
        const websites = req.query.websites.split(',').map(website => website.toLowerCase())
    var data
    if(websites.includes('amazon'))
    {
        amazon = await Amazon(req.query.searchterm,(req.query.index)?req.query.index:null)
        data={...data,amazon}
    }

    if(websites.includes('bing'))
    {
        bing = await Bing(req.query.searchterm,(req.query.index)?req.query.index:null)
        data={...data,bing}
    }

    if(websites.includes('ebay'))
    {
        ebay = await Ebay(req.query.searchterm,(req.query.index)?req.query.index:null)
        data={...data,ebay}
    }

    if(websites.includes('facebook'))
    {
        facebook = await Facebook(req.query.searchterm,(req.query.index)?req.query.index:null)
        data={...data,facebook}
    }

    if(websites.includes('google'))
    {
        google = await Google(req.query.searchterm,(req.query.index)?req.query.index:null)
        data={...data,google}
    }

    if(websites.includes('kijiji'))
    {
        kijiji = await Kijiji(req.query.searchterm,(req.query.index)?req.query.index:null)
        data={...data,kijiji}
    }

    if(websites.includes('twitter'))
    {
        twitter = await Twitter(req.query.searchterm,(req.query.index)?req.query.index:null)
        data={...data,twitter}
    }

    if(websites.includes('wikipedia'))
    {
        wikipedia = await Wikipedia(req.query.searchterm,(req.query.index)?req.query.index:null)
        data={...data,wikipedia}
    }

    if(websites.includes('yahoo'))
    {
        yahoo = await Yahoo(req.query.searchterm,(req.query.index)?req.query.index:null)
        data={...data,yahoo}
    }
    
    if(websites.includes('youtube'))
    {
        youtube = await Youtube(req.query.searchterm,(req.query.index)?req.query.index:null)
        data={...data,youtube}
    }      
    
    return res.status(200).json(data)

    } catch (error) {
        return res.status(404).json({
            error:"SOMETHING WENT WRONG"
        })
    }
})

module.exports = router