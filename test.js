const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.json({ name: "Hello World!" });
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log('Example app listening at http:/localhost:%s', port);
});
