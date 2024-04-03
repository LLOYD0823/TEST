var envelopeLink = document.getElementById("envelope-link");
var message = document.getElementById("message");

envelopeLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior
  
  // Toggle message display
  if (message.style.display === "block") {
    message.style.display = "none";
  } else {
    message.style.display = "block";
  }
});
