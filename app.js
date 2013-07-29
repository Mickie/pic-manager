
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
    ,signUp=require ('./routes/signup')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/signup', signUp.signup);
app.get('/signin', signUp.signin);
app.get('/login', signUp.login);
app.get('/user', signUp.user);
app.get('/users', user.list);

//get user pages
var requireAuthentication= function(){
     //if log_in? then render the page
    //else reder log-in page
}
app.all('/user/*',requireAuthentication)



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
