var express = require('express'),
    port = process.env.PORT || 7777,
    app = express();

app.use(express.static(__dirname + '/'));

// app.all("*", function(req, resp, next) {

//     resp.header("Access-Control-Allow-Origin", "*");
//     resp.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
// });

app.listen(port)
