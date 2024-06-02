document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("animateButton");

    button.addEventListener("click", function () {
        button.classList.add("animate");

        // Remover a classe de animação após a duração da animação (1 segundo)
        setTimeout(function () {
            button.classList.remove("animate");
        }, 1000);
    });
});
