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

app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/public/HTML/signup.html");
});

app.listen(3005, function () {
    console.log("Server is running on localhost3005");
});