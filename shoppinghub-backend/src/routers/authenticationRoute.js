const express = require('express')
const routes = express.Router()

const auth = require('../middlewares/auth')



routes.get('/authentication', auth, async (req, res) => {
    try {
        const { profile, token } = req

        profile.tokens = profile.tokens.filter((t) => t.token !== token)
    
        res.send({ authenticated: true })
    } catch (e) {
        res.status(401).send()
    }
})


module.exports = routes