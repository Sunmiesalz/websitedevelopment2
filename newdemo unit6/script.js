// Wait for the form to be submitted
document.getElementById('apply form').addEventListener('submit', function(event) {
    // Prevent the page from refreshing
    event.preventDefault();
    // Get the values from the inputs
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const resultDisplay = document.getElementById('result');
    // Show a custom message
    resultDisplay.style.color = "green";
    resultDisplay.style.marginTop = "20px";
    resultDisplay.innerText = `Thank you, ${name}! Your application for ${position} has been received.`;
    // Optional: Clear the form
    this.reset();
   });
   // Select the search input box from the HTML using its ID
const searchInput = document.getElementById("searchInput");
 
// Select the category dropdown menu from the HTML using its ID
const categoryFilter = document.getElementById("categoryFilter");
 
// Select ALL course cards from the page using their class name
// querySelectorAll returns a list of elements
const cards = document.querySelectorAll(".course-card");
 
 
// When the user types inside the search box,
// run the filterCourses function
searchInput.addEventListener("keyup", filterCourses);
 
 
// When the user changes the category dropdown selection,
// run the same filterCourses function
categoryFilter.addEventListener("change", filterCourses);
 
 
 
// Create a function called filterCourses
// This function filters which course cards should appear
function filterCourses() {
 
  // Get the text typed by the user in the search box
  // Convert it to lowercase so matching becomes easier
  const text = searchInput.value.toLowerCase();
 
 
  // Get the selected category from the dropdown menu
  const category = categoryFilter.value;
 
 
  // Go through each course card one by one
  cards.forEach(function(card) {
 
    // Find the title inside each course card (the h4 heading)
    // Convert it to lowercase for easier comparison
    const title = card.querySelector("h4").textContent.toLowerCase();
 
 
    // Get the category stored inside the course card
    // Example: frontend, backend, design
    const cardCategory = card.dataset.category;
 
 
    // Check TWO conditions:
    // 1) Does the course title include the typed text?
    // 2) Does the selected category match the card category?
    // OR is the category set to "all"?
    if (
      title.includes(text) &&
      (category === "all" || category === cardCategory)
    ) {
 
      // If BOTH conditions are true,
      // show the course card
      card.style.display = "block";
 
    } else {
 
      // Otherwise hide the course card
      card.style.display = "none";
 
    }
 
  });
 
}