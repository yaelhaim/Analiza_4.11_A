// Exercise 3: Return the request headers
// Goal: return all the request headers back to the client as a JSON string.
//
// Run: node ex3.js   and open http://localhost:3000

const http = require("http");

// write your code here
const server = http.createServer((req, res) => {
    const headers = JSON.stringify(req.headers);
    res.end(headers);
});

server.listen(3000);