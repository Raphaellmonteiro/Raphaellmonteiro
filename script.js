// Aguarda o DOM (estrutura HTML) ser completamente carregado
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o cabeçalho
    const header = document.getElementById("main-header");

    // Adiciona um "ouvinte" para o evento de rolagem (scroll)
    window.addEventListener("scroll", function() {
        
        // window.scrollY verifica o quanto a página foi rolada verticalmente
        if (window.scrollY > 50) {
            // Se rolou mais que 50 pixels, adiciona a classe 'scrolled'
            header.classList.add("scrolled");
        } else {
            // Se estiver no topo, remove a classe 'scrolled'
            header.classList.remove("scrolled");
        }
    });

    console.log("Portfólio carregado com sucesso!");
