const express = require('express');
const app = express();
const mongoose =require('mongoose');// interacts with the DB
const bodyParser= require('body-parser');//parse the body of requests
const cors = require('cors');
require('dotenv/config');//set up env file

app.use(bodyParser.json());// calls the body parse on all requests
app.use(cors());


const quotesRoute = require('./routes/quotes');
app.use('/quotes',quotesRoute);

/*
app.get('/', (req,res)=> {
    res.send('lur likes women');
});

*/


mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true ,useUnifiedTopology: true}, ()=>{
    console.log("connected to DB");
});


app.listen(3000);