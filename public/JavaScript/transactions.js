const express = require("express");
const router = express.Router();

//async function transfer(app) {
  router.post("/", async (req, res) => {
    console.log("Hello")
    const {sender, receiver, receiverName, amount } = req.body;
    const myHeaders = new Headers();
    myHeaders.append("x-auth-token", req.cookies.token);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      account: receiver,
      RecieverName: receiverName,
      TransactionAmount: amount,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    

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
        res.redirect("/template")
      })
      .catch((error) => console.error(error));
  });
//}

module.exports = router;
// module.exports = transfer;