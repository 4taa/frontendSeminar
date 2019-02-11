const fs = require('fs'),
	  http = require('http'),
	  express = require('express'),
	  app = express();

app.use(express.urlencoded());

http.createServer(app).listen(3000);
console.log("start");
app.get("/", function (req, res) {
	console.log("/index");
	res.send("<a href=" + "index.html" + ">Start Page</a>");
});

app.use(express.static(__dirname + "/client"));