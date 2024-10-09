const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Home Page!")
})

app.get('/about', (req, res) => {
    res.status(200).send("About Page!")
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>Non existance for now!</h1>")
})

app.listen(5500, () => {
    console.log("Server is listening on port 5500...!")
})