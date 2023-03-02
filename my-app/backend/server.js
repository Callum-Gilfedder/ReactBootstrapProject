const express = require("express")

const app = express()

app.get("/test", (req, res) => {
    res.send("testing")
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})