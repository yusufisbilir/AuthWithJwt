const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose 
 .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,})   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

const authRoute = require('./routes/auth');

app.use(express.json());
app.use('/api/user',authRoute);


app.listen(process.env.PORT, () => console.log(`Port listening`));