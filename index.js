const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { login, signup } = require("./public/JavaScript/login");
require("dotenv").config();
const PORT = process.env.PORT || 3005;
const cookieAuth = require("./middleware/auth.jwt.js");
const transferMoney = require("./public/JavaScript/transactions.js");
const personalReport = require("./public/JavaScript/personalReport.js");

app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/HTML/login.html");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/public/HTML/login.html");
});

app.get("/home", cookieAuth,function (req, res) {
  res.sendFile(__dirname + "/public/HTML/home.html");
});

app.get("/template", cookieAuth, function (req, res, next) {
  res.sendFile(__dirname + "/public/HTML/template.html");
});

app.get("/signup", function (req, res) {
  res.sendFile(__dirname + "/public/HTML/signup.html");
});

app.get("/transactions", cookieAuth,function (req, res) {
  res.sendFile(__dirname + "/public/HTML/transaction.html");
});

// app.get("/personal/report", cookieAuth,function (req, res) {
//   res.sendFile(__dirname + "/public/HTML/personalReport.html");
// });

app.get("/customer/support", cookieAuth,function (req, res) {
  res.sendFile(__dirname + "/public/HTML/customerSupp.html");
});

login(app)
signup(app)
//transfer(app)
//personalReport(app)
app.use("/transactions", transferMoney);
app.use("/personal/report", personalReport);
const server = app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;