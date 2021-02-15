const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path')


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

//serve static files from /public 
let publicPath = path.join(__dirname, '/public')
app.use(express.static(publicPath))


require("./routes/pages.routes.js")(app);


// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});