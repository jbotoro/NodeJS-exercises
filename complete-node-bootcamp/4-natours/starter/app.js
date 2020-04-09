
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

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

//Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter)


module.exports = app;

