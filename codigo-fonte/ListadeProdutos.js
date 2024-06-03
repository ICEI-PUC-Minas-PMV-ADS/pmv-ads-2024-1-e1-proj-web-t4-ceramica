document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão pela classe
    const button = document.querySelector('.buttonn');

    // Adiciona a classe 'pulsing' no evento mouseover
    button.addEventListener('mouseover', function() {
        button.classList.add('pulsing');
    });

    // Remove a classe 'pulsing' no evento mouseout
    button.addEventListener('mouseout', function() {
        button.classList.remove('pulsing');
    });
});
