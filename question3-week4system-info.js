// Import the built-in 'os' module
const os = require('os');

// Log system information
console.log("System Information:");
console.log("OS Type:", os.type());
console.log("OS Platform:", os.platform());
console.log("OS Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Total Memory (bytes):", os.totalmem());
console.log("Free Memory (bytes):", os.freemem());
console.log("System Uptime (seconds):", os.uptime());
