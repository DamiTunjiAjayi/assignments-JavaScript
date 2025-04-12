const fs = require('fs');

// Define the filename to read from
const filename = 'hello.txt';

// Read the content of the file (asynchronously)
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    return console.error(`Error reading file: ${err}`);
  }
  console.log(`Content of "${filename}":\n${data}`);
});
