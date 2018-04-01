/** @PetroservServer */
/*
Author URI: https://www.kawami.io/
*/
var express = require('express');
var app = express();
var flash = require('connect-flash');
var async = require('async');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var appConfig = require('./config/app.js')
var security = require('./app/libs/security.js')
var port = 8081;
var helmet = require('helmet')
var server = require('http').createServer(app);
var nodemailer = require('nodemailer');
var minifyHTML = require('express-minify-html');
var compression = require('compression');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var parseForm = bodyParser.urlencoded({
    extended: true
});
if (appConfig.env && appConfig.env != "dev") {
    app.use(morgan('short'));
}
else
    app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.set('view engine', 'ejs');
app.use(flash());
app.use(function(req, res, next) {
    res.locals.env = appConfig.env;
    next()
})
app.use(express.static(__dirname + '/views'));
app.use(compression());
if (appConfig.env && appConfig.env != "dev") {
    app.all('/css*', function(req, res, next) {
        res.header('Expires', new Date(Date.now() + expireTime).toUTCString());
        next();
    });
    var expireTime = 604800000;
    app.all('/js*', function(req, res, next) {
        res.header('Expires', new Date(Date.now() + expireTime).toUTCString());
        res.header('Last-Modified', new Date(Date.now() - expireTime * 4).toUTCString());
        next();
    });
}
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // hostname
    secure: true,
    port: 465, // port for secure SMTP
    auth: {
     user: 'petroservwebsite@gmail.com',
     pass: 'PetroservWeb3mail'
 }
});
require('./app/routes.js')(app, transporter);
if (appConfig.env && appConfig.env != "dev") {
    if (cluster.isMaster) {
        for (var i = 0; i < numCPUs; i++) {
            cluster.fork(); // create a worker
            console.info('cluster forked');
        }

        cluster.on('exit', function(worker, code, signal) {

        });
    }
    else {
        server.listen(port);
    }
}
else {
    server.listen(port);
}
console.log('Running ' + appConfig.name + ' server on port :  ' + port);
