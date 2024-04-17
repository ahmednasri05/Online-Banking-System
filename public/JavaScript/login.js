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

function signup() {
    // Retrieve the username and password from the form
    console.log("Hello")
    window.location.href = "signup";
   
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