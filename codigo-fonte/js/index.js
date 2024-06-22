if (localStorage.getItem("token") == null) {
    alert("você precisa estar logado para acessar essa página");
    window.location.href = "../html/signin.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado")
logado.innerHTML = `Olá! ${userLogado.nome}, participe da comunidade!`;

let logado2 = document.querySelector("#logado2")
logado.innerHTML = `Olá! ${userLogado.nome}, Volte sempre!`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "../html/signin.html";
}