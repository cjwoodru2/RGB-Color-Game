var express         = require("express"),
    app             = express();
    
    
app.get("/about", function(req, res) {
   res.render("about"); 
});

app.listen(process.env.PORT, process.env.IP);