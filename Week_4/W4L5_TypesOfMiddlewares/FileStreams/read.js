const fs = require('fs');

// Create a readable stream for the file
const readableStream = fs.createReadStream('data.txt', 'utf8');

let chunkCount = 0;
readableStream.on('data', (chunk) => {
    chunkCount++;
    console.log(`Received chunk ${chunkCount}:`);
    console.log(chunk);
});

readableStream.on('end', () => {
    console.log('Finished reading the file');
    console.log(`Total chunks read: ${chunkCount}`);
});


readableStream.on('error', (err) => {
    console.error('An error occurred:', err.message);
});
