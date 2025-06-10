let carrito = [];

function agregarAlCarrito(boton) {
  const producto = boton.parentElement;
  const nombre = producto.getAttribute('data-nombre');
  const precio = producto.getAttribute('data-precio');
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });

  const mensaje = carrito.map(p => `- ${p.nombre} ($${p.precio})`).join('%0A');
  const enlace = `https://wa.me/543855751325?text=Hola! Quiero cotizar los siguientes productos:%0A${mensaje}`;
  document.getElementById('btn-whatsapp').href = enlace;
}
