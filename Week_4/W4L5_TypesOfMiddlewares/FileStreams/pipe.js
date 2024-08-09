const fs = require('fs');

// Create a readable stream from an existing file
const readableStream = fs.createReadStream('data.txt');

// Create a writable stream to a new file
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream into the writable stream
readableStream.pipe(writableStream);

// Listen for the finish event to know when piping is done
writableStream.on('finish', () => {
    console.log('File copied successfully');
});
