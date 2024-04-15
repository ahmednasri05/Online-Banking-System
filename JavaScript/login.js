class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

function login() {
    // Retrieve the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

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
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
   
}