const mode = document.getElementById("mode-icon");
const body = document.body;

mode.addEventListener("click", () => {

    if (mode.classList.contains("fa-moon")) {
        mode.classList.remove("fa-moon");
        mode.classList.add("fa-sun");

        body.classList.add("dark");
    }
    else {
        mode.classList.remove("fa-sun");
        mode.classList.add("fa-moon");

        body.classList.remove("dark");
    }
});

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function logar() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!validarEmail(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (email == "admin@email.com" && password == "admin") {
        location.href = "home.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
}