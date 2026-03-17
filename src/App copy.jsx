import { useState } from "react";
import "./App.css";
function App() {
  
    const products = [
        {id : 1, name : "laptop", "price" : 1000},
        {id : 2, name : "mobile", "price" : 800},
        {id : 3, name : "headPhone", "price" : 600},
        {id : 4, name : "mouse", "price" : 300}
    ]

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      const existing = cart.find((item) => item.id == product.id);

      if(existing){
          const updatedCart = cart.map((item) => 
          item.id == product.id 
          ? {...item, quantity : item.quantity + 1} : item
          );
          setCart(updatedCart);
        }else{
          setCart([...cart, {...product, quantity : 1}]);
        }
    }

    const increaseQuanity = (id) => {
      const updateCart = cart.map((item) => 
        item.id == id ? {...item, quantity : item.quantity + 1} : item
      )
      setCart(updateCart);
    }


    const decreaseQuanity = (id) => {

      const updateCart = cart.map((item) => 
        item.id == id ? {...item, quantity : item.quantity - 1} : item
      ).filter((item) => item.quantity > 0);
      setCart(updateCart);
    }
  return (
    <>
    <section>
      <div className="contain">
        <div className="row">
          <ul>
            <li>1 : create a product object which contain 3 to 4 products it contain name, quantity & price of project </li>
            <li>2 : fetch products on ui   </li>
            <li> add to cart button, increase & decrese quantity button</li>

          </ul>
        </div>
        <div className="row">
          
        {
            products.map((p) => (
                <div className="col-lg-3 border " key={p.id}>
                    <h5>{p.name}</h5>
                      <p>{p.price}</p>
                      <button className='btn btn-outline-primary' onClick={() => addToCart(p)}>Add to Cart</button>
                    </div> 
            ))
        }  
            
        </div>

        <div className="">
          <p>here i am fetching cart Data</p>
          <div className="row">
            {
              cart.map((item) => (
                <div className="" key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{item.quantity}</p>
                  <div className="">
                    <p>price : {item.price * item.quantity }</p>
                  </div>
                  <button className='btn btn-outline-success' onClick={() => decreaseQuanity(item.id)}>-</button>
                  <button className='btn btn-outline-danger' onClick={() => increaseQuanity(item.id)}>+</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
      <p>hii i am app component</p>
      
    </>
  );
}

export default App;
