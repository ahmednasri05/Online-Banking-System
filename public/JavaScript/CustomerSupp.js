function generateReviewItems(reviews) {
  const reviewContainer = document.getElementById("reviewContainer");
  reviewContainer.innerHTML = "";
  reviews.forEach((review) => {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");
    reviewItem.innerHTML = `
        <span class="title"> ${review.username}</span>
        <div class="review-content"> ${review.content}
        `;
    reviewContainer.appendChild(reviewItem);
  });
}

function save() {
  let review = document.getElementById("reviewContent").value;
  const myHeaders = new Headers();
  const token = document.cookies.token;
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

  fetch("http://52.158.43.53:8080/api/reviews/create", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
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

window.onload = function () {
  generateReviewItems(reviews);
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
