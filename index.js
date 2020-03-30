const express = require('express');
const app = express();
const server = require('http').Server(app);
var distDir = __dirname + "/Public/";
app.use(express.static(distDir));

// listen // requests
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});