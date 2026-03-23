create a e commerce application which do below functanility
-> fetcha data from array of objects & show on ui
-> user can addToCart & removeFromCart (cannot add multiple same items)
-> add Quanity (as per increase quantity calculate total price)
-> decrease quantity ; (if quantity is 1 & user decrease it should be remove from cart)

Answers :
step 1 : create a custom array of objects
const data = [{id : 1, name : "laptop, price: 300}];
fetch that data on ui with map operator

step 2 : addToCart(product) Functanility
-> create a useState hook of "cartItems"
-> in function take "product" as parameter
-> setCartItems take [array], first destrucure "...cartItems" then take a {object} which contain "...product" & quantity
goto addToCart button & pass the reference of function () => addToCart(p);

now your add to card functanility is working now you want to impliement do not add duplicate data
-> create isExist veriable
-> use find method to compare cartItem.id to items.id;
if false then only user can setItems

step 2 : removeFromCart(productId);
create a variable upDatedCart;
-> use filter method to remove data & compare parameter id with item id
-> setCart(updatedCart);

goTo button pass the reference () => removeCart(p.id);

step 3 : incrementQuantity(productId);
-> use const updatedCart varible & add to setCart(updatedCart)
-> use map method to iterate cartItems & compare id with productsId if true then
in object desctreture iteratble item (...id) & add quantity + 1

step 3 : decreaseQuantity(productId);
-> use const updatedCart varible & add to setCart(updatedCart)
-> use map method to iterate cartItems & compare id with productsId if true then
in object desctreture iteratble item (...id) & add quantity - 1

use filter method if item.quanity > 0
