
function signUp () {
  //Get the user input from HTML
  //Info is inside req.body because it is
  //a request to this api /signup
  //const { username, email, password } = req.body;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  //Prepare the request header
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
 //Build the object
  const raw = JSON.stringify({
    name: username,
    email: email,
    password: password,
  });

 //Request Options
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  //Post api /create creates new user
   fetch("http://52.158.43.53:8080/api/users/create", requestOptions)
    .then((response) => {
      if (!response.ok) {
        {
          var alert = document.getElementById('alert');
          alert.style.display = 'flex';
          // return res.status(403).json({
          //     error: "Invalid Field, Please enter valid data",
          //   });
        }
      }
      return response.json(); 
    })
    .then((result) => {
      if(result._id){
        window.location.href = "/login";
      }
      
    })
    .catch((error) => console.log("error", error));
}

function closeAlert() {
  var alert = document.getElementById('alert');
  alert.style.display = 'none';
}

