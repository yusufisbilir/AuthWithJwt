const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('no permission');

    try{
        const verification = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verification;
        console.log(req.user);
        next();
    }catch(err){
        res.status(400).send('token error')
    }
}