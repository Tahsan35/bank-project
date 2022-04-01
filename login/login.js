document.getElementById("loginButton").addEventListener("click", function() {
    const inputEmail = document.getElementById("user-email");
    const userEmail = inputEmail.value;
    // get the password from the user
    const inputPassword = document.getElementById("user-passward");
    const userPasswd = inputPassword.value;
    
    if (userEmail == "tahsan" && userPasswd == "tahsan") {
        window.location.href = "Banking/banking.html"
    }
})