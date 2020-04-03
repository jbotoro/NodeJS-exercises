const fs = require('fs');
const server = require('http').createServer();


server.on('request', (req,res) => {
    // Method 1
    // Method is problematic is you have a large number of requests
    // or if the data you a sending back in the response is large

    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });


    //Method 2 : Streams
    // In method 1 all the data was read and saved into variable before being sent
    // to the client, whereas with streams we send each "chunk" of data as its read
    // instead of waiting for the whole file to be read

    // Downside of this approach: readable is much faster than sending the response
    // stream ... leads to backpressure ( response cant send data as fast as it is
    // receiving it from the file it is reading)


    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', (chunk) => {
    //     res.write(chunk);
    // });
    // // response end necessary when whole file has been read
    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode= 500;
    //     res.end('File not found!')
    // });


    // Method 3
    // pipe operator pipes output of readable steams into the input of a writeable
    //stream which handles the issues presented in Method 2 of backpressure

    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    // readableSource.pipe(writeableDest);

});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening ...')
})