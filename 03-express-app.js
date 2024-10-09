const express = require('express');
const path = require("path");


const app = express();
app.use(express.static("./public"))


app.all("*", (req, res) => {
    res.status(404).send("resource not found")
});

app.listen(5500, () => {
    console.log("server is listening on port 5500...")
})
// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
// });