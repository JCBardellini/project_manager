const mongoose = require("mongoose");

const clientContactSchema = new mongoose.Schema( {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { 
        type: String, 
        required: true,
        validate: [
            {
            validator: (v) => /^\d+[\d()-]*\d+$/.test(v),
            message: "The phone number must container only numbers and parentheses",
            },
            {
            validator: (v) => v.length <= 10,
            message: "The phone number must not exceed 10 characters in length",
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