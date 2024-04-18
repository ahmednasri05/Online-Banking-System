function transfer() {
var receiver = document.getElementById("receiver").value;
var amount = document.getElementById("amount").value;
const myHeaders = new Headers();
myHeaders.append("x-auth-token", localStorage.getItem('token'));
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "account": receiver,
  "TransactionAmount": amount
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://52.158.43.53:8080/api/transactions/create", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    window.location.href = "/template";
  })
  .catch((error) => console.error(error));
}