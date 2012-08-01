var express = require('express'),
	plugins = require('./plugins');

var app = express.createServer(
    express.bodyParser(),
    express.cookieParser()
);

app.configure( function () {
    app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use("/public", express.static(__dirname + '/public'));
	app.use("/styles", express.static(__dirname + '/styles'));
	app.use("/scripts", express.static(__dirname + '/scripts'));
	app.use("/images", express.static(__dirname + '/images'));
    app.use(app.router);
});

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/socialist', plugins.socialist);
app.get('/socialist/demo', plugins.socialist.demo);

var port = process.env.PORT || 3001;
app.listen(port);
console.log('Express app started on port '+ port);