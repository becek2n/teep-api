const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
var fs = require("fs");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({ extended: true, })
);

app.use(express.static(__dirname + '/Assets'));
app.use(cors());

app.get("/", (req, resp) => {
    resp.json({ info : "node started" })
});

var routesUser = require('./Routes/Route'); //importing route
routesUser(app); 

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})

