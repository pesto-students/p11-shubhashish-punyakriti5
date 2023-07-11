const productViews = new WeakMap();
productId = { product1: 1, product2: 2 };

const cartItems = new WeakSet();

function incrementProductViews(productId) {
  if (productViews.has(productId)) {
    productViews.set(productId, productViews.get(productId) + 1);
  } else {
    productViews.set(productId, 1);
  }
}

function addToCart(productId) {
  if (cartItems.has(productId)) {
    console.log("Product has been already added");
  } else if (productViews.has(productId)) {
    cartItems.add(productId);
  }
  console.log("Product added to cart");
}

incrementProductViews(productId.product1);
incrementProductViews(productId.product1);

addToCart(productId.product1);
addToCart(productId.product1);
