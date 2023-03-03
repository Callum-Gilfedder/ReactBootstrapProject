const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const User = require("./models/users.js");
const jwt = require("jsonwebtoken")

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://callumgilf:testpassword@cluster0.t1usykw.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));

app.post("/api/register", async (req, res) => {
    try {
        console.log("User creating...");
    
        const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        });
        console.log("User created...");
    
        res.json({ status: "ok" });
    } catch (err) {
        console.log({ status: "error", error: err.message })
        res.json({ status: "error", error: err.message });
    }
    console.log(req.body);
    });

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  })
  if (user) {
    console.log("Sucessful login")
    return res.json({status: "ok", user: true})
  } else {
    console.log("Failed login")
    return res.json({status: "error", user: false})
  }
});

app.listen(1337, () => {
  console.log("Server listening on port 1337");
});