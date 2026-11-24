document.getElementById("signupForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        message.innerHTML = "All fields required!";
        return;
    }

    if (password.length < 6) {
        message.innerHTML = "Password must be 6 characters!";
        return;
    }

    if (password !== confirmPassword) {
        message.innerHTML = "Password not matching!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.find(user => user.email === email);

    if (exists) {
        message.innerHTML = "Email already exists!";
        return;
    }

    users.push({
        name: name,
        email: email,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    message.innerHTML = "Signup Successful!";

    document.getElementById("signupForm").reset();

});