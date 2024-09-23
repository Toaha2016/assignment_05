// Donation Page Button Color Change
// Check if the current URL is the Donation page
if (window.location.pathname.includes('index.html')) { // Replace 'donation.html' with your actual donation page path
  // Change the color of the Donate button
  document.getElementById('donateButton').style.backgroundColor = '#B4F461';
}


document.getElementById("historyButton").addEventListener("click", function() {
  window.location.href = "history.html";
  historyButton.style.backgroundColor = "#B4F461";
});



// Main 001
// First functionality (Updated code)
// Get references to the necessary elements
const donateButton = document.getElementById('donateButton');
const visibleNumberButton = document.getElementById('visibleNumber');
const inputBox = document.getElementById('inputBox');

// Initialize the donation amount with the default value of 5
let totalDonation = 5;

// Add an event listener to the 'Donate Now' button
donateButton.addEventListener('click', function() {
    // Get the value entered in the input box
    let donationAmount = parseInt(inputBox.value);

    // Ensure the entered value is a valid number
    if (!isNaN(donationAmount) && donationAmount > 0) {
        // Add the donation amount to the total donation
        totalDonation += donationAmount;

        // Update the button text with the new donation total
        visibleNumberButton.innerHTML = `<img src="assets/coin.png" alt=""> ${totalDonation} BDT`;

        // Clear the input box
        inputBox.value = '';
    } else {
        alert("Please enter a valid donation amount.");
    }
});


// Main 002
// Second functionality (New code)
const visibleNumberButton02 = document.querySelector("#visibleNumber02");
const inputBox02 = document.querySelector("#inputBox02");
const donateButton02 = document.querySelector("#donateButton02");

let visibleNumber02 = 5; // Initial visible number for second button

visibleNumberButton02.innerHTML = `<img src="assets/coin.png" alt=""> ${visibleNumber02} BDT`;

// Add event listener to the "Donate Now" button for second functionality
donateButton02.addEventListener("click", function() {
  const donationAmount = parseInt(inputBox02.value);

  // Update the button text if input is a valid number
  if (!isNaN(donationAmount) && donationAmount > 0) {
    visibleNumber02 += donationAmount;
    visibleNumberButton02.innerHTML = `<img src="assets/coin.png" alt=""> ${visibleNumber02} BDT`;
    inputBox02.value = ''; // Clear the input box
  } else {
    alert("Please enter a valid donation amount!");
  }
});



// Third functionality (New code for the third donation box)
const visibleNumberButton03 = document.querySelector("#visibleNumber03");
const inputBox03 = document.querySelector("#inputBox03");
const donateButton03 = document.querySelector("#donateButton03");

let visibleNumber03 = 5; // Initial visible number for third button

// Set initial button text with the image and visible number
visibleNumberButton03.innerHTML = `<img src="assets/coin.png" alt=""> ${visibleNumber03} BDT`;

// Add event listener to the "Donate Now" button for third functionality
donateButton03.addEventListener("click", function() {
  const donationAmount = parseInt(inputBox03.value);

  // Update the button text if input is a valid number
  if (!isNaN(donationAmount) && donationAmount > 0) {
    visibleNumber03 += donationAmount;
    // Update button text with the new visible number and the image
    visibleNumberButton03.innerHTML = `<img src="assets/coin.png" alt=""> ${visibleNumber03} BDT`;
    inputBox03.value = ''; // Clear the input box
  } else {
    alert("Please enter a valid donation amount!");
  }
});
