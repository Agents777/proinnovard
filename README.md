<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PROINNOVARD - Ventas de Sistemas y Proyectos</title>
  <link rel="stylesheet" href="* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f7f7f7;
  color: #333;
}

header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
}

main {
  padding: 20px;
}

section {
  margin-bottom: 30px;
}

h1, h2 {
  font-weight: bold;
}

#inicio {
  text-align: center;
}

#productos ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
}

.product-item {
  width: 300px;
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-item img {
  max-width: 100%;
}

#carrito {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 300px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.cart-item img {
  max-width: 50px;
}

#total-price {
  font-weight: bold;
  margin-top: 20px;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}">
</head>
<body>
  <header>
    <nav>F
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="inicio">
      <h1>Bienvenidos a PROINNOVARD</h1>
      <p>Sistemas y proyectos para tu negocio.</p>
    </section>

    <section id="productos">
      <h2>Nuestros productos</h2>
      <input type="text" id="search" placeholder="Buscar producto...">
      <ul id="product-list"></ul>
    </section>

    <section id="carrito">
      <h2>Tu carrito de compras</h2>
      <ul id="cart-items"></ul>
      <div id="total-price"></div>
      <button id="checkout-btn">Finalizar compra</button>
    </section>

    <section id="contacto">
      <h2>Contáctanos</h2>
      <form action="">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" required>
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; PROINNOVARD 2024. Todos los derechos reservados.</p>
  </footer>

  <script src="const productList = document.querySelector('#product-list');
const cartItems = document.querySelector('#cart-items');
const totalPrice = document.querySelector('#total-price');
const checkoutBtn = document.querySelector('#checkout-btn');

let cart = [];

function renderProduct(product) {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  
  const productName = document.createElement('h3');
  productName.textContent = product.name;
  
  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.name;

  const productPrice = document.createElement('p');
  productPrice.textContent = `$${product.price.toFixed(2)}`;
  
  productItem.appendChild(productName);
  productItem.appendChild(productImage);
  productItem.appendChild(productPrice);

  productList.appendChild(productItem);

  productItem.addEventListener('click', () => {
    addToCart(product);
  });
}

function addToCart(product) {
  const cartItem = document.createElement('li');
  cartItem.classList.add('cart-item');

  const cartItemImage = document.createElement('img');
  cartItemImage.src = product.image;
  cartItemImage.alt = product.name;

  const cartItemName = document.createElement('h4');
  cartItemName.textContent = product.name;

  const cartItemPrice = document.createElement('p');
  cartItemPrice.textContent = `$${product.price.toFixed(2)}`;

  const cartItemQuantity = document.createElement('input');
  cartItemQuantity.type = 'number';
  cartItemQuantity.value = 1;
  cartItemQuantity.min = 1;
  cartItemQuantity.max = product.stock;

  const cartItemDelete = document.createElement('button');
  cartItemDelete.textContent = 'Eliminar';
  cartItemDelete.addEventListener('click', () => {
    removeFromCart(cartItems.children[i]);
  });

  cartItem.appendChild(cartItemImage);
  cartItem.appendChild(cartItemName);
  cartItem.appendChild(cartItemPrice);
  cartItem.appendChild(cartItemQuantity);
  cartItem.appendChild(cartItemDelete);

  cartItems.insertBefore(cartItem, cartItems.firstChild);
  cart.push({
    product,
    quantity: 1
  });

  updateTotalPrice();
}

function removeFromCart(cartItem) {
  const index = cartItems.children.indexOf(cartItem);
  if (index !== -1) {
    cart.splice(index, 1);
    cartItem.remove();
    updateTotalPrice();
  }
}

function updateTotalPrice() {
  let totalPriceValue = 0;
  for (const item of cart) {
    totalPriceValue += item.product.price * item.quantity;
  }
  totalPrice.textContent = `Precio total: $${totalPriceValue.toFixed(2)}`;
}

// Event listeners
const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', (event) => {
  const searchString = event.target.value.toLowerCase();
  for (let product of products) {
    const productName = product.name.toLowerCase();
    if (!product.name.includes(searchString)) {
      product.element.remove();
    } else {
      product.element.style.display = 'block';
    }
  }
});

checkoutBtn.addEventListener('click', () => {
  // Implementar la función de pago aquí
});"></script>
</body>
</html>
