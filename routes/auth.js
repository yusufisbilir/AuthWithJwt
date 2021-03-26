const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');

const validateSchema = Joi.object({
    name:Joi.string().min(6).required(),
    email:Joi.string().min(6).required().email(),
    password:Joi.string().min(6).required(),
});

// /api/user/register
router.post('/register',async (req,res)=>{

    const {error} = validateSchema.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    const emailControl = await User.findOne({email:req.body.email});

    if(emailControl) return res.status(400).send('Email adress is used');

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword,
    });
    try{
        const savedUser  = await user.save();
        res.send({user:user._id});

    }catch(err){
        console.log(err);
    };
});

module.exports = router;