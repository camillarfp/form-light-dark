const mode = document.getElementById("mode-icon");

mode.addEventListener("click", () => {
    if (mode.classList.contains("fa-moon")) {
        mode.classList.remove("fa-moon");
        mode.classList.add("fa-sun");
    }
    else {
        mode.classList.remove("fa-sun");
        mode.classList.add("fa-moon");
    }
});