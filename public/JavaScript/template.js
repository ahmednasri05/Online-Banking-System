const { userData } = require("./userData");


document.addEventListener('DOMContentLoaded', function() {
    // Get the link element
    console.log("Event listener")
    const reportLink = document.getElementById('reportLink');
    
    // Add click event listener to the link
    reportLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        
        // Perform a GET request to the /personal/report endpoint
        fetch('/personal/report')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch personal report');
                }
                // Optionally, handle the response here
                return response.text();
            })
            .then(data => {
                // Optionally, handle the data here
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});

async function getCookie(key) {
    var keyValue = await  document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

let user = userData(getCookie('token'))
console.log(user)
function populateUsername() {
    console.log("HELLO")
    document.getElementById("username").textContent = "Shady";
}

window.onload = function() {
    populateUsername();
};