var express = require("express");
var app = express();
var path = require("path");

app.get("/", function(req, res) {
  res.send("Hello World 4!");
});

app.use("/.well-known", express.static(path.resolve(__dirname, ".well-known")));

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
