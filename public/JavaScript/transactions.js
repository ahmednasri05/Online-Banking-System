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
            return response.json().then((data) => {
              throw new Error(data.error);
          });
        }
        return response.json(); // Parse response body as JSON
        }
      }
    })
    .then((result) => {
      document.getElementById('warning__title').textContent = "Transaction Completed";
      var alert = document.getElementById('alert');
      alert.style.background = '#00FF00';
      alert.style.display = 'flex';
      setTimeout(() => {
        window.location.href = "/template";
    }, 2000);

    })
    .catch((error) => {
        console.error("Error status:", error.status);
        console.error("Error:", error.message);
        document.getElementById('warning__title').textContent = error.message;
        var alert = document.getElementById('alert');
        alert.style.background = '#FF0000';
        alert.style.display = 'flex';
    });
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
