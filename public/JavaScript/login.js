class User {
    constructor(username, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

function login() {
    // Retrieve the username and password from the form
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("Hello")
    //Prevent sending empty inputs
    if (email == "" || password=="") {
        {alert("Please enter valid data")}
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "email": email,
    "password": password
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("http://localhost:8080/api/users/login", requestOptions)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to login');
        }
        return response.json(); // Parse response body as JSON
    })
    .then((data) => {
        const token = data.token; // Extract token from response data
        if (!token) {
            throw new Error('Token not found in response');
        }
        // Cache the token in local storage
        localStorage.setItem('token', token);
        console.log("Token:", date.headers['x-auth-token']);
    })
    .catch((error) => console.error(error));

    const templateRequestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem('token') // Include the token in the request header
        }
    };

    return fetch("http://localhost:3005/template", templateRequestOptions)
    .then((response) => {
        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Failed to fetch template');
        }
        // Redirect to the /template route
        window.location.href = "/template";
    })
    .catch((error) => console.error(error));
        console.log("HEY", localStorage.getItem('token'))
}

async function signup() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("Hello")
    
    //Prevent sending empty inputs
    if (email == "" || password=="") {
        {alert("Please enter valid data")}
    }

    //Assume this is the retrived user info from database
    const user1 = new User(username, email, password);
    
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "name": `${username}`,
        "email": `${email}`,
        "password": `${password}`
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        await fetch("http://localhost:8080/api/users", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

        // window.location.href = "template";
}

function createAccount() {
     // Retrieve the username and password from the form
     var username = document.getElementById("username").value;
     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     console.log("Hello")
     //Prevent sending empty inputs
     if (username == "" || password=="" || email=="") {
         {alert("Please enter valid data")}
     }
 
     //Assume this is the retrived user info from database
     
    
         console.log("Username:", username);
         console.log("Password:", password);
 
         //Redirect to home page
         window.location.href = "template";
    
}

function getUsers() {
    // Load the token from browser storage
    const token = localStorage.getItem('token');
    
    // Check if token exists
    if (!token) {
        console.error('Token not found in local storage');
        return; // Exit function if token not found
    }

    // Create headers object with the token
    const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    };

    // Fetch user data using the token in the headers
    fetch("http://localhost:8080/api/users/info", {
        headers: headers
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return response.json(); // Parse response body as JSON
    })
    .then((data) => {
        console.log("User Data:", data); // Print user data to console
    })
    .catch((error) => console.error(error));
}
// export default function login() {
//     console.log('Login function executed');
//     // Your login logic here
// }