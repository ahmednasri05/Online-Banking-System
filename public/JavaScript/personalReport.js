const express = require("express");
const router = express.Router();
const cookieAuth = require("../../middleware/auth.jwt");
const path = require('path');
var userData = {
    name: "John Doe",
    balance: 5000,
    transactions: [
        { date: "2024-04-15", merchant: "Amazon", expenses: 150 },
        { date: "2024-04-14", merchant: "Starbucks", expenses: 5 },
        { date: "2024-04-12", merchant: "Netflix", expenses: 10 },
        { date: "2024-04-10", merchant: "Apple Store", expenses: 1000 },
        { date: "2024-04-09", merchant: "Gas Station", expenses: 50 },
        { date: "2024-04-08", merchant: "Grocery Store", expenses: 200 },
        { date: "2024-04-07", merchant: "Restaurant", expenses: 80 },
        { date: "2024-04-05", merchant: "Movie Theater", expenses: 20 },
        { date: "2024-04-04", merchant: "Fitness Center", expenses: 30 },
        { date: "2024-04-03", merchant: "Online Shopping", expenses: 120 },
        { date: "2024-04-01", merchant: "Coffee Shop", expenses: 6 },
        { date: "2024-03-30", merchant: "Electronics Store", expenses: 300 },
        { date: "2024-03-28", merchant: "Pharmacy", expenses: 40 },
        { date: "2024-03-27", merchant: "Home Improvement", expenses: 150 },
        { date: "2024-03-25", merchant: "Clothing Store", expenses: 70 }
        // Add more transactions as needed
    ]
};


router.get("/", cookieAuth, async (req, res) => {
    
    console.log("HELLO")

    const myHeaders = new Headers();
    myHeaders.append("x-auth-token", req.cookies.token);
    myHeaders.append("Content-Type", "application/json");

    console.log("HERE", req.cookies.token)
    var userName
    // Fetch user data using the token in the headers
    fetch("http://52.158.43.53:8080/api/users/info", {
        headers: myHeaders
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return response.json(); // Parse response body as JSON
    })
    .then((data) => {
        console.log("User Data:", data.name); // Print user data to console
        document.getElementById("username").textContent = data.name
    })
    .catch((error) => console.error(error));


    const raw = "";
    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    // body: raw,
    redirect: "follow"
    };

    fetch("http://52.158.43.53:8080/api/transactions/fetch", requestOptions)
    .then((response) => response.text())
    .then((data) => {
        console.log("Response Data:", data); 
        const obj = JSON.parse(data)

        var transactionContainer = document.getElementById("transactionContainer");

        //Clear existing transactions
        transactionContainer.innerHTML = "";

        obj.forEach(function(transaction) {
            var transactionItem = document.createElement("div");
            transactionItem.classList.add("transaction-item");
            transactionItem.innerHTML = `
                <p>Date: ${new Date(transaction.TransactionDate)}</p>
                <p>Merchant: ${userName}</p>
                <p>Expenses: $${transaction.TransactionAmount}</p>
            `;
            transactionContainer.appendChild(transactionItem);
        });

    })
    .catch((error) => console.error(error));

    const rootDir = path.dirname(require.main.filename);
    // Use the root directory to construct the file path to your HTML file
    const filePath = path.join(rootDir, 'public', 'HTML', 'personalReport.html');
    res.sendFile(filePath);
  
})
        
      
//window.onload = function() {
//     personalReport();
// };
module.exports = router;
//module.exports = personalReport;