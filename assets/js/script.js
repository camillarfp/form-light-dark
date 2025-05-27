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

function logar() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "admin" && password == "admin") {
        alert("Login com sucesso!");
    } else {
        alert("Usuário ou senha inválidos!");
    }
}