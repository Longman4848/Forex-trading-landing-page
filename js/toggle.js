var theButtons = document.querySelectorAll(".btn-success");

// Turn node list into a JS Array
var buttonArray = Array.from(theButtons);

// Loop over the buttons and give each its click event handler
buttonArray.forEach(function(button) {
    button.addEventListener("click", function() {
        // We will pass a reference to the current button to the function
        myFunction(this);
    });
});

// The function now expects to be passed a reference to the button that was clicked
function myFunction(element) {
    // Get a reference to div that follows the button and then search that div
    // for the first pre element inside of it:
    var answer = element.nextElementSibling.querySelector("p");

    // All we need to do is toggle the visibility of that pre element
    answer.classList.toggle("hidden");
}