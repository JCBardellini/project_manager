const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require("./config/db.js");
const State = require("./models/State.js")
const ClientContact = require("./models/ClientContact.js")

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

// GET ROUTES



// POST ROUTES

// our form for the homepage for customers info if they need help
app.post("/", async (req, res) => {
    try {
        let dbResponse = await ClientContact.create(req.body)
        res.status(201).send(dbResponse)
    } catch (err) {
        res.status(400).send("error getting the customer information")
    }
})


// UPDATE ROUTES

// DELETE ROUTES





// END ROUTES
// connection works and its connected to mongo remember 
// "node --watch --env-file .env server.js" - this will run the server and update it
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});