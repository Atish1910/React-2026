# 🛒 E-Commerce App – Quick Revision Notes

## 📌 Core Features

- Fetch product data from array
- Add to Cart (no duplicates)
- Remove from Cart
- Increase / Decrease Quantity
- Auto remove when quantity = 0
- Calculate total price

---

## 🧩 Step 1: Product Data & UI Rendering

```js
const products = [
  { id: 1, name: "Laptop", price: 300 },
  { id: 2, name: "Mobile", price: 200 }
];
Render on UI
products.map((p) => (
  <div key={p.id}>
    <h3>{p.name}</h3>
    <p>{p.price}</p>
    <button onClick={() => addToCart(p)}>Add to Cart</button>
  </div>
));
🧩 Step 2: Add To Cart
State
const [cartItems, setCartItems] = useState([]);
Function
const addToCart = (product) => {
  const isExist = cartItems.find(item => item.id === product.id);

  if (!isExist) {
    setCartItems([
      ...cartItems,
      { ...product, quantity: 1 }
    ]);
  }
};

✅ Prevents duplicate items
✅ Adds default quantity = 1

🧩 Step 3: Remove From Cart
const removeFromCart = (id) => {
  const updatedCart = cartItems.filter(item => item.id !== id);
  setCartItems(updatedCart);
};
🧩 Step 4: Increase Quantity
const incrementQuantity = (id) => {
  const updatedCart = cartItems.map(item =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  setCartItems(updatedCart);
};
🧩 Step 5: Decrease Quantity
const decrementQuantity = (id) => {
  const updatedCart = cartItems
    .map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter(item => item.quantity > 0); // remove if 0

  setCartItems(updatedCart);
};
💰 Total Price Calculation
const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
```
