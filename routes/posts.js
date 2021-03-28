// example data
const router = require('express').Router();
const authVerify = require('./tokenVerification');

router.get('/',authVerify,(req,res)=>{
    res.json({
        posts:{
            title:'post title',
            description:'post description'
        }
    });
});

module.exports = router;