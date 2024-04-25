window.onload = function() {
  templateUserName()
  getCookie()
};
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
}
return "";
}

function transact() {
  //const { receiver, receiverName, amount, type } = req.body;
  const cardnumber = document.getElementById('cardnumber').value;
  const receiver = document.getElementById('receiver').value;
  const receiverName = document.getElementById('receiverName').value;
  const amount = document.getElementById('amount').value;
  const type = document.getElementById('type').value;
  const myHeaders = new Headers();
  myHeaders.append(
    "x-auth-token", getCookie("token")
  );
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    cardNumber: cardnumber,
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
          if (!response.ok) {
            throw new Error('Transaction failed');
        }
        return response.json(); // Parse response body as JSON
        }
      }
    })
    .then((result) => {
      const obj = JSON.parse(result)
      res.redirect("/template");
    })
    .catch((error) => {
        console.error("Error status:", error.status);
    });
    var alert = document.getElementById('alert');
    alert.style.display = 'flex';
    setTimeout(() => {
      window.location.href = "/template";
  }, 2000);
};

function templateUserName() {
  const myHeaders = new Headers();
  myHeaders.append("x-auth-token", getCookie("token"));
  myHeaders.append("Content-Type", "application/json");
  // Fetch user data using the token in the headers
  fetch("http://52.158.43.53:8080/api/users/info", {
    headers: myHeaders,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      return response.json(); // Parse response body as JSON
    })
    .then((data) => {
      document.getElementById("username").textContent = data.name;
      document.getElementById("cardnumber").textContent = data.card;
    })
    .catch((error) => console.error(error));
}

function closeAlert() {
      var alert = document.getElementById('alert');
      alert.style.display = 'none';
}
