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

   function templateUserName() {
    const myHeaders = new Headers();
    myHeaders.append("x-auth-token", getCookie("token"));
    myHeaders.append("Content-Type", "application/json");
    console.log("Token", getCookie("token"))
     // Fetch user data using the token in the headers
     fetch("http://52.158.43.53:8080/api/users/info", {
        headers: myHeaders
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return response.json(); // Parse response body as JSON
    })
    .then((data) => {
        document.getElementById("username").textContent = data.name
    })
    .catch((error) => console.error(error));
   }