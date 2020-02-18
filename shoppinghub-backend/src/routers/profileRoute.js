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

routes.put('/profile/saveprofile', auth, async (req, res) => {
    try {

        const { profile, token, body } = req


        Object.assign(profile,body)
        //await console.log(body)
        // await console.log(profile)
        await profile.save()
        res.send({profile,saved:true})
    } catch (e) {
        res.status(400).send({ saved: false , error: true, e: e.message })
    }
})


module.exports = routes