

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('inputModal');
const closeBtn = document.getElementsByClassName('close')[0];
const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const errorText = document.getElementById('errorText');
// Open the modal when the button is clicked
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when the close button (x) is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when the user clicks anywhere outside the modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
// Validate input and submit
submitBtn.addEventListener('click', () => {
    const inputValue = userInput.value;
    // Check if input is a valid integer
    if (Number(inputValue)) {
        // Input is an integer
        // You can handle the submission logic here
        console.log("Submitted value:", inputValue);
        // Clear error message if any
        errorText.textContent = '';
        // Close the modal
        modal.style.display = 'none';
    } else {
        // Input is not an integer
        // Display error message
        errorText.textContent = 'Please enter a valid integer.';
    }
});