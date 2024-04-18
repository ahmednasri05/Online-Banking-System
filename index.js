const express = require("express");
const app = express();


app.use(express.static("public"));

function authenticate(req, res, next) {
    // Check for the presence of the x-auth-token header
    const token = req.header('x-auth-token');
    if (!token) {
        // Token not found, redirect the user to the login page
        return res.redirect('/login'); // Adjust the login route as per your setup
    }
    // Token found, validate it (you may need to implement this part)
    // If token is valid, allow the request to proceed
    // If token is invalid, return an unauthorized response
    // Example:
    // if (isValidToken(token)) {
    //     return next(); // Proceed to render the template page
    // } else {
    //     return res.status(401).send('Unauthorized');
    // }
    // For simplicity, let's assume the token is always valid
    next();
}

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

app.get("/transactions", function (req, res) {
    res.sendFile(__dirname + "/public/HTML/transaction.html");
});

app.get("/personal/report", function (req, res) {
    res.sendFile(__dirname + "/public/HTML/personalReport.html");
});

app.get("/customer/support", function (req, res) {
    res.sendFile(__dirname + "/public/HTML/customerSupp.html");
});

app.listen(3005, function () {
    console.log("Server is running on localhost3005");
});