
async function signup(app) {
 app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: username,
    email: email,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

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
}

function getUsers(token) {
  // Load the token from browser storage

  // Check if token exists
  if (!token) {
    console.error("Token not provided");
    return; // Exit function if token not found
  }

  // Create headers object with the token
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token,
  };

  // Fetch user data using the token in the headers
  fetch("http://localhost:8080/api/users/info", {
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      return response.json(); // Parse response body as JSON
    })
    .then((data) => {
      return data; // Print user data to console
    })
    .catch((error) => console.error(error));
}


function login(app) {
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      email: email,
      password: password,
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("http://52.158.43.53:8080/api/users/login", requestOptions)
      .then((response) => {
        if (!response.ok) {
          {
            return res.status(403).json({
                error: "Invalid login",
              });
          }
          return;
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
}

module.exports = { signup, getUsers, login };
