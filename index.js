const express = require("express")
const path = require("path")
const jsonServer = require("json-server")

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")))

app.use("/todo", jsonServer.router(db.json))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Password generator listening on ${port}`)
