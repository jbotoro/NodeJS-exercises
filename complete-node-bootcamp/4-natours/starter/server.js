const app = require('./app');
const port = 3000;


// 4 Initialize Server
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});