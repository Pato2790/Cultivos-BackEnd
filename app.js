var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

//Modelo
var index = require('./routes/index');
var users = require('./routes/users');
var productores = require('./routes/productor');
var chacras = require('./routes/chacra');
var cuadros = require('./routes/cuadro');
var camiones = require('./routes/camion');
var empresas = require('./routes/empresa');
var instituciones = require('./routes/institucion');
var calidades = require('./routes/calidad');
var especies = require('./routes/especie');
var ingresos = require('./routes/ingreso');
var variedades = require('./routes/variedad');
var lotes = require('./routes/lote');
var viajes = require('./routes/viaje');
var tratamientos = require('./routes/tratamiento');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: '*' , credentials :  true,  methods: 'GET,PUT,POST,DELETE,OPTIONS', allowedHeaders: 'Content-Type,Authorization' }));

//Enrutado
app.use('/', index);
app.use('/users', users);
app.use('/productor', productores);
app.use('/chacra', chacras);
app.use('/camion', camiones);
app.use('/empresa', empresas);
app.use('/institucion', instituciones);
app.use('/cuadro', cuadros);
app.use('/cuadro/byChacra', cuadros);
app.use('/calidad', calidades);
app.use('/especie', especies);
app.use('/ingreso', ingresos);
app.use('/ingreso/simplifyIngresos', ingresos);
app.use('/ingreso//withViajes', ingresos);
app.use('/variedad', variedades);
app.use('/lote', lotes);
app.use('/viaje', viajes);
app.use('/tratamiento', tratamientos);
app.use('/viaje/withIngresos', tratamientos);

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
