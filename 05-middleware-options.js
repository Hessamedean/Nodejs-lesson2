const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static("./public"))
app.use(morgan('tiny'))


app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.get("/api/products", (req, res) => {
    res.send("PRODUCTS!!")
})

app.get("/api/Items", (req, res) => {
    res.send("ITEMS")
})

app.listen(5500, () => {
    console.log("server is listening on port 5500...")
})