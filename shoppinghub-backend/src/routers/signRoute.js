const express = require('express')
const routes = express.Router()
const Profiles = require('../models/profiles')


routes.post('/signup', async(req,res)=> {
    try{
        
        const {email, password, confirmPassword }  = req.body
       
        const emailChecking = await Profiles.findOne({ email : email },function (err,docs) {
            return docs
        })

        if (emailChecking) {
            throw new Error("Email is being used !")
        }

        if(password !== confirmPassword){
            throw new Error("Passwords are not same !")
        }

        const profile = await Profiles(req.body).save()
        const token = await profile.generateAuthToken()

        res.send({ profile, token })
        
    }catch(e){

        res.status(400).send({error:true, e:e.message})
    }    
},(error, req, res, next)=>{

})

routes.post('/signin', async (req, res) => {
    try {
        const profile = await Profiles.findByCredentials(req.body.email, req.body.password)
        const token = await profile.generateAuthToken()
        //const publicData = profile.sendPublicDataOnly()
        res.send({ profile, token })
    } catch (e) {
       // console.log(e)
        res.status(400).send({error:true,e:e.message})
    }
})



module.exports = routes