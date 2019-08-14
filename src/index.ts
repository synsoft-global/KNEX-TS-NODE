import express from "express";
import bodyParser from "body-parser";
import http = require('http');
var cartRouter = require('./routes/cart.ts');

const app = express();
var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use(express.static('public'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
    next();
});


/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val : any) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}


/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '1337');

app.get('/', (request, response) => {
  response.send('Hello world!');
});
app.use('/', cartRouter);
app.set('port', port);
server.listen(port);

export default server;