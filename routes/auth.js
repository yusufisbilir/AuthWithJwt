const router = require('express').Router();

// /api/user/register
router.post('/register',(req,res)=>{
    res.send('Registered')
});

module.exports = router;