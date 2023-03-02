const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/register", (req, res) => {
    console.log(req.body)
    res.json()
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})