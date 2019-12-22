const jwt = require("jsonwebtoken")
const Profiles = require('../models/profiles')



const auth = async (req, res, next) => {
    try {
        //console.log(req.header('Authorization'))
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded_token = jwt.verify(token, process.env.JWT_SECRET)
          //      console.log(decoded_token , " " , token )
        const profile = await Profiles.findOne({ _id: decoded_token._id, 'tokens.token': token })
        //console.log('d')
        if (!profile) {
            throw new Error()
        }
        req.token = token
        req.profile = profile
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please login first.',authenticated:false })
    }
}

module.exports = auth