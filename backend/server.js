const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require("./config/db.js");
const State = require("./models/State.js")
const User = require("./models/User.js")
const ClientContact = require("./models/ClientContact.js")
const path = require("path")

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

app.use(express.static(path.join(__dirname, "../client/dist")))
app.use( (req, res, next) => {
    if (req.path.startsWith("/server")) {
        req.url = req.url.replace("/server", "");
    }; // allows us to host it on render
    next();
});

// START ROUTES

// GET ROUTES

// getting the employees from mongodb
app.get("/dashboard/employees", async (req, res) => {
    try{
        let employees = await User.find()
        return res.status(200).send(employees)
        }catch(err){
            return res.status(500).send(err.message)
        }
})

// POST ROUTES

// our form for the homepage for customers info if they need help
app.post("/dashboard/new/employee", async (req, res) => {
    console.log(req.body);
    try {
        let dbResponse = await User.create(req.body);
        res.status(201).send(dbResponse);
    } catch (err) {
        res.status(400).send("Error creating a new employee");
    }
});



app.post("/", async (req, res) => {
    console.log(req.body);
    try {
        let dbResponse = await ClientContact.create(req.body)
        
        res.status(201).send(dbResponse)
    } catch (err) {
        res.status(400).send("error getting the customer information")
    }
})



// UPDATE ROUTES

app.put("/dashboard/employees/:editEmployee", async (req, res) => {
    try {
        const updatedUser = req.body;
        // find user by id and update it with the request body
        const editedUser = await User.findByIdAndUpdate(req.params.editEmployee, updatedUser, {new: true} )
        }
     catch (err) {
        res.status(400).send('could not update')
     }
})
// DELETE ROUTES

// delete for each employee
app.delete("/dashboard/employees/:employeeId", async (req, res) => {
    try {
        const deleteEmployee = await User.findByIdAndDelete(req.params.employeeId);
        res.status(200).send(deleteEmployee)
    } catch (err) {
        res.status(500).send(err.message);
    }
})





// END ROUTES
// connection works and its connected to mongo remember 
// "node --watch --env-file .env server.js" - this will run the server and update it
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});