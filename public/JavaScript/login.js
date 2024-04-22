const express = require("express");
const router = express.Router();



router.post("/", async (req, res) => {

  //Get the user input from HTML
  //Info is inside req.body because it is
  //a request to this api /signup
  const { email, password } = req.body;
  console.log("HERE", email, password)
  //Prepare the request header
  const myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
  
  //Build the object
  const raw = JSON.stringify({
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
  
    //Api that searches for user and returns a web token to be chached 
    fetch("http://52.158.43.53:8080/api/users/login", requestOptions)
      .then((response) => {
        if (!response.ok) {
          {
            return res.status(403).json({
                error: "Invalid login",
              });
          }
        }
        return response.json(); // Parse response body as JSON
      })
      .then( async (data) => {
        const token = data.token; // Extract token from response data
  
        if (!token) {
          throw new Error("Token not found in response");
        }
        
        res.cookie("token", token);

        return res.redirect("/template");   

      })
      .catch((error) => console.error(error));
    
});


module.exports = router;
