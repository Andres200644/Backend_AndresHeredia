// main.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada");

    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Botón clickeado");
        });
    });
});
