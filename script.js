// Array of sentences to rotate through
const sentences = [
    "Ask anything",
    "Click a button to make image generation adventurous",
    "Check the source citations for each answer",
    "Have fun Groking"
];

// Get the input element
const inputElement = document.getElementById('tickerInput');

// Index to keep track of the current sentence
let currentSentenceIndex = 0;

// Function to update the placeholder
function updatePlaceholder() {
    inputElement.placeholder = sentences[currentSentenceIndex];
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
}

// Initial call to set the first sentence
updatePlaceholder();

// Set interval to change the placeholder every few seconds
const interval = setInterval(updatePlaceholder, 3000); // Change every 3 seconds

// Optional: Clear the interval when the input gets focus
inputElement.addEventListener('focus', function() {
    clearInterval(interval);
});

// Optional: Restart the interval when the input loses focus
inputElement.addEventListener('blur', function() {
    interval = setInterval(updatePlaceholder, 3000);
});