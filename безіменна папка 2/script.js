setInterval(function() {
    // Remove the oldest error element
    var oldError = document.querySelector('.error-message:first-child');
    if (oldError) {
        oldError.remove();
    }
}, 100); // Adjust the interval (in milliseconds) as needed

document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;

    // Create a new div element for the error message
    var errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.style.left = x + "px";
    errorMessage.style.top = y + "px";
    errorMessage.innerHTML = "error";

    // Append the error message to the body
    document.body.appendChild(errorMessage);
});
