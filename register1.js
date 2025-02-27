document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value.trim();
    let password = document.getElementById("password").value.trim();

    // Check if fields are empty
    if (name === "" || password === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Save credentials in localStorage
    localStorage.setItem("username", name);
    localStorage.setItem("password", password);

    // Show success message
    document.getElementById("message").innerText = "Registration successful! Redirecting to login page...";

    // Redirect to login page after 2 seconds
    setTimeout(function() {
        window.location.href = "index.html";
    }, 2000);
    
});
// code for send to sheet

        let form = document.querySelector("form");
        form.addEventListener('submit',(e) =>{
            e.preventDefault();
            let data = new FormData(form);
            fetch('https://script.google.com/macros/s/AKfycbzVuH8K6BJqc1z49kSCqq2GMxLufdumHDYAC6e_S_tqjOXH0xLJMFPuwqSeQLyD9A0-iA/exec',{
                method:"POST",
                body: data
            })
            .then(res => res.json())
            .then(data => console.log(data));
        })