window.onload = function () {
    generateReviewItems();
    getCookie()
    const reviewForm = document.getElementById("reviewForm");
    reviewForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const reviewContent = document.getElementById("reviewContent").value;
      const username = getUsername();
      reviews.push({ username, content: reviewContent });
      generateReviewItems(reviews);
      reviewForm.reset();
    });
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

function generateReviewItems(reviews) {
  

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let getRequestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch("http://52.158.43.53:8080/api/reviews/fetch", getRequestOptions)
    .then((response) => response.text())
    .then((data) => {
        const obj = JSON.parse(data)
        const reviewContainer = document.getElementById("reviewContainer");
        reviewContainer.innerHTML = "";
        obj.forEach((review) => {
            const reviewItem = document.createElement("div");
            reviewItem.classList.add("review-item");
            reviewItem.innerHTML = `
                <span class="title"> ${review.name}</span>
                <div class="review-content"> ${review.review}
                `;
            reviewContainer.appendChild(reviewItem);
          });
    })
    .catch((error) => console.error(error));
    
}

async function save() {
  let review = document.getElementById("reviewContent").value;
  const myHeaders = new Headers();
  const token = getCookie("token");
  myHeaders.append(
    "x-auth-token",
    token
  );
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: "Hady",
    review: review,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  await fetch("http://52.158.43.53:8080/api/users/info", {
        headers: myHeaders
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return response.json(); // Parse response body as JSON
    })
    .then((data) => {
        const newRaw = JSON.stringify({
            "name": data.name,
            "review": review
        });
        requestOptions.body = newRaw;
        document.getElementById("username").textContent = data.name
    })
    .catch((error) => console.error(error));
 await fetch("http://52.158.43.53:8080/api/reviews/create", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
     location.reload();
}

function getUsername() {
  return "Mike Ross";
}
let reviews = [];
let requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("http://52.158.43.53:8080/api/reviews/fetch", requestOptions)
    .then((response) => response.json())
    .then((result) => result.body = reviews)
    .catch((error) => console.error(error));
;

