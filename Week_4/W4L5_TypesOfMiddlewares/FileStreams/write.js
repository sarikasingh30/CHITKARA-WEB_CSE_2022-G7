const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

// Track the number of chunks written
let chunkCount = 0;

// Function to simulate writing chunks of data
function writeChunks() {
    // Simulate multiple chunks of data
    for (let i = 1; i <= 5; i++) {
        const chunk = `Data ${i}\n`;
        const canContinue = writableStream.write(chunk);
        chunkCount++;
        if (!canContinue) {
            console.log('Stream buffer is full, waiting for drain event...');
            // Wait for the drain event to continue writing
            writableStream.once('drain', writeChunks);
            return;
        }
    }
    writableStream.end(); // End the stream after writing all chunks
}

// Listen for the 'finish' event to know when writing is complete
writableStream.on('finish', () => {
    console.log('Finished writing to the file');
    console.log(`Total chunks written: ${chunkCount}`);
});

// Handle any errors that occur
writableStream.on('error', (err) => {
    console.error('An error occurred:', err.message);
});

// Start writing chunks of data
writeChunks();
