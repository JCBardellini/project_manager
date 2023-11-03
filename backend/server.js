const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require("./config/db.js");

// our port
const PORT = 3000;
const app = express();

// START MIDDLEWARE

app.use(express.json()); // allows us to req.body 

app.use(cors({
    origin: "*" // allow all origins to access the API
})); 

app.use(morgan('dev')); // log requests to console

app.use(helmet()); // add security headers

app.use( (req, res, next) => {
    if (req.path.startsWith("/server")) {
        req.url = req.url.replace("/server", "");
    }; // allows us to host it on render
    next();
})

// START ROUTES

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>")
})






// END ROUTES
// connection works and its connected to mongo remember 
// "node --watch --env-file .env server.js" - this will run the server and update it
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});