const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    isAdmin: { type: Boolean, require: true },
    jobTitle: { type: String, require: true },
    department: { type: String, require: true },
    location: { type: String, require: true },
    bio: { type: String, require: true },
},
{
    timestamps: true, // Adds createdAt and updatedAt fields automatically
});

const User = mongoose.model("User", userSchema);
module.exports = User;