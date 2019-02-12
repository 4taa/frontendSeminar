var express = require("express"),
    http = require("http"),
    app = express();

http.createServer(app).listen(3000);
console.log('Server started at ' + 'http://127.0.0.1:3000');

app.get("/", function (req, res) {
   res.send("<a href=" + "index.html" + ">Start Page</a>");
   console.log("GET index")
});

app.use(express.static(__dirname + "/static"))