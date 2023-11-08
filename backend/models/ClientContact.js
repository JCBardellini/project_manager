const mongoose = require("mongoose");

const clientContactSchema = new mongoose.Schema( {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { 
        type: String, 
        required: true,
        validate: [
            {
            validator: (v) => {
                 let isGood = /(\+?\d{1,3}[-\s]?)?(\(?\d+\)?[-\s]?)*\d+/.test(v)
                 console.log(isGood);
                 return isGood
            },
            message: "The phone number must container only numbers and parentheses",
            },
        ] 
    },
    company: { type: String, required: true },
    interested: { type: String, required: true },
    message: { type: String, required: true },
},
{
    timestamps: true
})

const ClientContact = mongoose.model("ClientContact", clientContactSchema);
module.exports = ClientContact