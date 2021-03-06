
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//1 middleware: data from body added to request
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


app.use(express.json());

// Serving up static files from a folder instead of a route

app.use(express.static(`${__dirname}/public`))

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



const mystery = (a,b) => {
    let x = a;
    let y = b;

    while(x !== y){
        if(x>y){
            x = x - y;
        }else{
            y = y - x;
        }
    }
    return x;
}