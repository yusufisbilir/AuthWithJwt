const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true, useUnifiedTopology:true},()=>{console.log('DB connected ')});

const authRoute = require('./routes/auth');
app.use('/api/user',authRoute);


app.listen(process.env.PORT, () => console.log(`Port listening`));