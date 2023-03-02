const mongoose = require("mongoose")

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    }
}, {collection: "user-data"})

const model = mongoose.model("UserData", User)

module.export = User