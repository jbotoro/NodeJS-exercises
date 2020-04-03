const fs = require('fs');
const server = require('http').createServer();


server.on('request', (req,res) => {
    // Method 1
    // Method is problematic is you have a large number of requests
    // or if the data you a sending back in the response is large

    fs.readFile('test-file.txt', (err, data) => {
        if (err) console.log(err);
        res.end(data);
    });
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening ...')
})