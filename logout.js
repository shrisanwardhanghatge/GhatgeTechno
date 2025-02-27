document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn"); // Remove login flag
    alert("You have been logged out!");
    window.location.href = "index.html"; // Redirect to login page
});

document.getElementById("explore").addEventListener("click", function() { window.location.href = "explore.html"; // Replace with your desired page URL });

});