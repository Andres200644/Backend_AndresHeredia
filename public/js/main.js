document.addEventListener("DOMContentLoaded", () => {
    console.log("RunwayStyle está funcionando correctamente.");

    // Lógica para manejar el carrito de compras
    const cartButtons = document.querySelectorAll(".add-to-cart");
    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Producto agregado al carrito.");
        });
    });
});
