// Grab the button element
const inputButton = document.getElementById("button");

// Approach 1: Using an anonymous function
inputButton.addEventListener("click", function () {
  alert("I was clicked!");
});

// Approach 2: Using a named function
function clickAlert() {
  alert("Hee hee, that tickles!");
}

// Attach the named function as an event listener
inputButton.addEventListener("click", clickAlert);

// Optional: wrap in a function to call in index.js for testing
function addingEventListener() {
  inputButton.addEventListener("click", clickAlert);
}

// Call the outer function to activate the listener
addingEventListener();
