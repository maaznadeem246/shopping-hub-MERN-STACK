const express = require('express')
const Profiles = require('../models/profiles')
const auth = require('../middlewares/auth')
const routes = express.Router()

routes.get('/profile', auth, async (req, res) => {
    try{
        
        const profile = req.profile
        const token = req.token
        res.send(profile)
    }catch(e){
        res.status(400).send({ error: true, e: e.message })
    } 
})

module.exports = routes