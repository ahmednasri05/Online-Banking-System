const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
  //Get the user input from HTML
  //Info is inside req.body because it is
  //a request to this api /signup
  const { username, email, password } = req.body;

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
  await fetch("http://52.158.43.53:8080/api/users/create", requestOptions)
    .then((response) => {
      if (!response.ok) {
        {
          return res.status(403).json({
              error: "Invalid Field, Please enter valid data",
            });
        }
      }
      return response.json(); 
    })
    .then((result) => {
      if(result._id){
        return res.redirect("/login");
      }
      
    })
    .catch((error) => console.log("error", error));
});


module.exports = router;
