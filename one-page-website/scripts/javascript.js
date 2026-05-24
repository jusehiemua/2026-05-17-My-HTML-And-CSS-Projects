document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();

        if (fullName === "" || email === "") {
            message.textContent = "Please enter your full name and email address before submitting.";
        } else {
            message.textContent = "Thank you, " + fullName + "! Sleek Motorbikes has received your message.";
            form.reset();
        }
    });
});
