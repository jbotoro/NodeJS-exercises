
const express = require('express');
const morgan = require('morgan');

const app = express();

//1 middleware: data from body added to request
app.use(morgan('dev'))
app.use(express.json());

//create our own middleware

app.use((req,res,next) => {
    console.log('Hello from the middleware!')
    next();
});

app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    next();
})


module.exports = app;

