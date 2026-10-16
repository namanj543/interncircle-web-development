const buttons = document.querySelectorAll(".pricing-card button");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const plan = button.parentElement.querySelector("h2").textContent;

        alert("You selected the " + plan + " plan!");
    });
});