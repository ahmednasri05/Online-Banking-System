const { userData } = require("./userData");

async function getCookie(key) {
    var keyValue = await  document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

let user = userData(getCookie('token'))
console.log(user)
function populateUsername() {
    document.getElementById("username").textContent = user.name;
}

window.onload = function() {
    populateUsername();
};