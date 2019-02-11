const http = require('http'),
	  express = require('express'),
	  app = express();

app.use(express.urlencoded());

http.createServer(app).listen(3000);
console.log('Server started at ' + 'http://127.0.0.1:3000');
app.get("/", function (req, res) {
	console.log("/index");
	res.send("<a href=" + "index.html" + ">Start Page</a>"
			+ "<a href=" + "about.html" + ">Start Page</a>");
});

app.use(express.static(__dirname + "/client"));