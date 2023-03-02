const mongoose = require("mongoose")

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
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

const UserModel = mongoose.model("UserData", User)

module.exports = UserModel