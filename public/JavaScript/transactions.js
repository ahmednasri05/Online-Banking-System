const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { receiver, receiverName, amount, type } = req.body;

  const myHeaders = new Headers();
  myHeaders.append(
    "x-auth-token", req.cookies.token
  );
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    cardNumber: req.cookies.card,
    account: receiver,
    RecieverName: receiverName,
    TransactionAmount: amount,
    type: type,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // fetch("http://52.158.43.53:8080/api/transactions/create", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.error(error));

  fetch("http://52.158.43.53:8080/api/transactions/create", requestOptions)
    .then((response) => {
      if (!response.ok) {
        {
          return res.status(403).json({
            error: "Invalid Field, Please enter valid data",
          });
        }
      }
    })
    .then((result) => {
      res.redirect("/template");
    })
    .catch((error) => console.error(error));
});
module.exports = router;
