const express = require("express");
const app = express();


app.use(express.static("public"));


app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/public/HTML/login.html");
});

app.get("/home", function (req, res) {
    res.sendFile(__dirname + "/public/HTML/home.html");
});

app.get("/template", function (req, res) {
    res.sendFile(__dirname + "/public/HTML/template.html");
});
app.listen(3002, function () {
    console.log("Server is running on localhost3002");
});