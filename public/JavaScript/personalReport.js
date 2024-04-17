// Sample data for demonstration
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

// Function to populate user's name
function populateUsername() {
    document.getElementById("username").textContent = userData.name;
}

// Function to populate current balance
function populateBalance() {
    document.getElementById("balance").textContent = userData.balance;
}

// Function to populate transaction history
function populateTransactions() {
    var transactionContainer = document.getElementById("transactionContainer");
    // Clear existing transactions
    transactionContainer.innerHTML = "";

    // Loop through transactions and create transaction items
    userData.transactions.forEach(function(transaction) {
        var transactionItem = document.createElement("div");
        transactionItem.classList.add("transaction-item");
        transactionItem.innerHTML = `
            <p>Date: ${transaction.date}</p>
            <p>Merchant: ${transaction.merchant}</p>
            <p>Expenses: $${transaction.expenses}</p>
        `;
        transactionContainer.appendChild(transactionItem);
    });
}

// Populate user data when the page loads
window.onload = function() {
    populateUsername();
    populateBalance();
    populateTransactions();
};
// Function to populate transaction history
// Function to populate transaction history
function populateTransactions() {
    var transactionContainer = document.getElementById("transactionContainer");
    // Clear existing transactions
    transactionContainer.innerHTML = "";

    // Loop through transactions and create transaction items
    userData.transactions.forEach(function(transaction) {
        var transactionItem = document.createElement("div");
        transactionItem.classList.add("transaction-item");

        // Create transaction detail containers
        var dateContainer = document.createElement("div");
        dateContainer.classList.add("transaction-detail");
        dateContainer.classList.add("transaction-date");
        dateContainer.textContent = transaction.date;

        var merchantContainer = document.createElement("div");
        merchantContainer.classList.add("transaction-detail");
        merchantContainer.classList.add("transaction-merchant");
        merchantContainer.textContent = transaction.merchant;

        var expensesContainer = document.createElement("div");
        expensesContainer.classList.add("transaction-detail");
        expensesContainer.classList.add("transaction-expenses");
        expensesContainer.textContent = "$" + transaction.expenses;

        // Append transaction details to transaction item
        transactionItem.appendChild(dateContainer);
        transactionItem.appendChild(merchantContainer);
        transactionItem.appendChild(expensesContainer);

        transactionContainer.appendChild(transactionItem);
    });
}
