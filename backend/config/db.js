const mongoose = require("mongoose");

let connectionString = process.env.MONGO_URL;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// log when the server is connected to mongodb

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB!");
})