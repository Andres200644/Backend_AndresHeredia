document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Cargado Correctamente");
  
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", () => {
        alert("Producto agregado al carrito!");
      });
    });
  });
  