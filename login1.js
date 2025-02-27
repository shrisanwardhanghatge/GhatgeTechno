function loginform(event) {
    // Tab to edit
  }
  document.getElementById("loginform").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
  
      let enterName= document.getElementById("loginName").value.trim();
      let enterPassword = document.getElementById("loginPassword").value.trim();
  
      // Retrieve stored credentials
      let storedName = localStorage.getItem("username");
      let storedPassword = localStorage.getItem("password");
  
      // Check if entered credentials match stored credentials
      if (enterName=== storedName && enterPassword === storedPassword) {
          alert("Login successful! Redirecting...");
          window.location.href = "main.html"; // Redirect to dashboard or another page
      } else {
          document.getElementById("loginMessage").innerText = "Invalid username or password!";
      }
  });