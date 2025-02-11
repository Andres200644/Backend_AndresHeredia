console.log("Main JS conectado correctamente");

document.addEventListener('DOMContentLoaded', () => {
  const cartButton = document.getElementById('view-cart');
  if (cartButton) {
    cartButton.addEventListener('click', () => {
      alert('Redirigiendo al carrito...');
    });
  }
});
