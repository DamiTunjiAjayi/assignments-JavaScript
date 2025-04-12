const fs = require('fs');

// Define the filename and content
const filename = 'hello.txt';
const content = 'Hello, File System!';

// Write the content to the file (asynchronously)
fs.writeFile(filename, content, (err) => {
  if (err) {
    return console.error(`Error writing file: ${err}`);
  }
  console.log(`File "${filename}" created successfully with content: "${content}"`);
});
