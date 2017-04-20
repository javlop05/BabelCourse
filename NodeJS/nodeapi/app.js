var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// conectamos a la base de datos
require('./lib/connectMongoose');
require('./models/Agentes');
require('./models/Usuario');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //__dirname = carpeta actual
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    //en cada middleware tengo que responder o llamar a next
    console.log('URL:', req.originalUrl);
    //next(new Error('fatal'));
    //res.send('ok');
    next();
});

// Rutas de 
app.use('/', require('./routes/index'));
app.use('/apiv1/agentes', require('./routes/apiv1/agentes'));
app.use('/apiv1/usuarios', require('./routes/apiv1/usuarios'));
//app.use('/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
