document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay in loading the content
    setTimeout(function () {
        // Hide the loading spinner
        document.querySelector(".loader-wrapper").style.display = "none";

        // Show the page content
        document.querySelector(".content").style.display = "block";
    }, 2000); // Adjust the delay time in milliseconds (2000ms = 2 seconds)
});