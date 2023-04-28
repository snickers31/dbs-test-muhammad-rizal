const http = require('http');
const app = require('./app');
require('dotenv').config();

const server = http.createServer(app);

server.listen(process.env.PORT);
console.log('Environment: ' + process.env.NODE_ENV);
console.log(' Server listening on port: ' + process.env.PORT);
