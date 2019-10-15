const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

const profileSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    password:{
        type:String,
        required:true,
        min: 6
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer,
        required:false
    },
    account:{
        type: String,
        required:true
    }
})

// this functions runs before saving the data 
// it will convert the password in different form for security purpose

profileSchema.pre('save', async function (next) {
    const profile = this
    if (profile.isModified('password')) {
        //  console.log(profile.password, " pre password")
        profile.password = await bcryptjs.hash(profile.password, 8)
        // console.log(profile.password, " Hashed password")
    }

    next()
})



// this function is creating the token which we will generate 
// after new login
profileSchema.methods.generateAuthToken = async function(){
    
    const profile = this
    const token = jwt.sign({_id: profile._id.toString()}, process.env.JWT_SECRET)
    
    profile.tokens = profile.tokens.concat({token:token})
  
    await profile.save()
    return token
}

// this will check the Credentials
profileSchema.statics.findByCredentials = async (email, password) => {
    
    const profile = await Profile.findOne({ email })
    if (!profile) {
        throw new Error('Email or Password is not same !')
    }

    const isMatch = await bcryptjs.compare(password, profile.password)

    if (!isMatch) {
        throw new Error('Email or Password is not same !')
    }

    return profile
}


// this function is returning the last json value after deleting the values 
// which we don't want to the client side

profileSchema.methods.toJSON = function(){
    const profile = this
    const publicProfileData = profile.toObject()
    
    delete publicProfileData.password
    delete publicProfileData.tokens
    delete publicProfileData.avatar
    
    return publicProfileData 
}

const Profile = mongoose.model('Profiles',profileSchema)

module.exports = Profile