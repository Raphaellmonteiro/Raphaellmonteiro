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
    // 1. Seleciona os elementos
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // 2. Verifica se já existe uma preferência salva no localStorage
    const currentTheme = localStorage.getItem("theme");
    
    if (currentTheme) {
        // Se existir, aplica o tema salvo
        body.classList.add(currentTheme);
        
        // Se o tema salvo for "dark-mode", marca o checkbox
        if (currentTheme === "dark-mode") {
            themeToggle.checked = true;
        }
    }

    // 3. Adiciona um "ouvinte" para o evento de "change" (clique) no interruptor
    themeToggle.addEventListener("change", function() {
        if (this.checked) {
            // Se o interruptor for marcado (checked)
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode"); // Salva a preferência
        } else {
            // Se o interruptor for desmarcado
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light-mode"); // Salva a preferência
        }
    });
    
    // ======================================= //
    console.log("Portfólio carregado com sucesso!");
});
