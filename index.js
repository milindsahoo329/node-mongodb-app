const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


// Use express to set up the server

const app = express();

app.use(cors());


// Use CORS middleware with origin option if required
// var corsOptions = {
//     origin: "http://localhost:8081"
//   };
// app.use(cors(corsOptions));


// use body parser middleware to parse requests of content-type - application/json
app.use(bodyParser.json());

// use body parser middleware to parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));  



// initialize mongodb
const dbsetup = require("./setup/mongosetup");
const routes = require('./app/routes')(app);


// test default route
app.get("/", (req, res) => {
  res.json({ message: "Default route" });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} !!!`);
});