class User {
    constructor(username, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

function login() {
    // Retrieve the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Hello")
    //Prevent sending empty inputs
    if (username == "" || password=="") {
        {alert("Please enter valid data")}
    }

    //Assume this is the retrived user info from database
    const user1 = new User("Hady Aziz", "1234");

    if (username == user1.username || password == user1.password) {
        console.log("Username:", username);
        console.log("Password:", password);

        //Redirect to home page
        window.location.href = "template";
    } else {
        alert("Invalid username or password");
    }
   
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
// export default function login() {
//     console.log('Login function executed');
//     // Your login logic here
// }