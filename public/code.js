document.addEventListener("DOMContentLoaded", ()=> {
    const loginform = document.querySelector(".login-form");
    const motdepasse = document.querySelector(".motdepasse");
    const email = document.querySelector(".email");
    const errorMsg = document.querySelector("#error");

    const user = "kllno4@gmail.com";
    const pass = "12345";
    loginform.addEventListener('submit', (e) => {
        e.preventDefault();
        if (motdepasse.value === pass && email.value === user) {
            window.location.href = "2m.html"; // Redirect to desired page
        } else {
            errorMsg.textContent = "Email or password is incorrect."; // Display error message
        }
    });
});

