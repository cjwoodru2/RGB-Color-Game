var express         = require("express"),
    app             = express(),
    serveStatic     = require("serve-static"),
    path            = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT, process.env.IP);