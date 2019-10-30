const express = require('express')
const Profiles = require('../models/profiles')
const auth = require('../middlewares/auth')
const routes = express.Router()

routes.get('/profiles/myprofile', auth, async (req, res) => {
    try{
        
        const profile = req.profile
        res.send(profile)
    }catch(e){

    } 
})

module.exports = routes