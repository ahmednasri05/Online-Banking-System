function generateReviewItems(reviews) {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = ''; 
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
        <span class="title"> ${review.username}</span>
        <div class="review-content"> ${review.content}
        `;
        reviewContainer.appendChild(reviewItem);
    });
}

function getUsername() {
    return "Mike Ross";
}


let reviews = [
    { username: 'Hady', content: 'nice'},
    { username: 'Nasri', content: 'not so nice'},
    { username: 'Farrag', content: 'i refuse to express my opinion on the grounds that i dont want to'},
   
];

window.onload = function() {
    generateReviewItems(reviews);
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const reviewContent = document.getElementById('reviewContent').value;
        const username = getUsername(); 
        reviews.push({ username, content: reviewContent }); 
        generateReviewItems(reviews); 
        reviewForm.reset(); 
    });
};
