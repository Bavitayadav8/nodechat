var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chatRouter = require('./routes/getUsername');
var fileUploadRouter = require('./routes/fileUploading')	

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));	
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/fakepath',express.static(path.join(__dirname, 'public')));	

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat', chatRouter);
app.use('/file', fileUploadRouter);

console.log('app.js');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// app.get('/chat', function(req, res){
//   console.log('chat');
//   res.render('getUsername', {title:'Chat Web App', projectName:'Chat Feature- Password Management System'})	
// })	

module.exports = app; 