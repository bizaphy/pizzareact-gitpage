import "bootstrap/dist/css/bootstrap.min.css";
import CardPizza from "./CardPizza";
import Header from "./Header";
import { pizzas } from "../assets/pizzas";
import { useState } from "react";

const Home = () => {
  const [cart, setCart] = useState([]);

  // Función para agregar pizza al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      // Verifica si la pizza ya está en el carrito
      const existingPizza = prevCart.find((item) => item.id === pizza.id);
      //Esta parte examina si es necesario aumentar la cantidad, o agregar al carrito como tal
      if (existingPizza) {
        // Si ya existe, incrementa la cantidad
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Función dentro del carrito: DISMINUYE la cantidad de una pizza en el carrito
  const decreaseQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  //Funcion que calcula el total del carrito. Esta se activa cada vez que se renderiza la pag (cdo aplica setCart)
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((pizza) => {
      total += pizza.price * pizza.quantity;
    });
    return total;
  };

  return (
    <>
      <Header />
      <div className="container-carrito">
        <h2 className="section-title">Carrito</h2>

        <div className="cart-container">
          {cart.length === 0 ? (
            <p>No hay pizzas en el carrito.</p>
          ) : (
            <ul className="list-group">
              {cart.map((pizza) => (
                <li key={pizza.id} className="list-group-item">
                  <img className="cart-item" src={pizza.img} alt={pizza.name} />
                  <span>
                    {pizza.name} - ${pizza.price} x{" "}
                    <strong className="quantity-number">
                      {pizza.quantity}
                    </strong>
                  </span>
                  <div className="button-cart-container">
                    <button
                      className="button-cart increase"
                      onClick={() => decreaseQuantity(pizza.id)}
                    >
                      -
                    </button>
                    <button
                      className="button-cart decrease"
                      onClick={() => increaseQuantity(pizza.id)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
              <div className="total">TOTAL: ${calculateTotal()}</div>
            </ul>
          )}
        </div>

        <h2 className="section-title available">Pizzas Disponibles</h2>
        <div className="cards">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              img={pizza.img}
              name={pizza.name}
              ingredients={pizza.ingredients.join(", ")}
              price={`$${pizza.price}`}
              onAddToCart={() => addToCart(pizza)}
            />
          ))}
        </div>
        <div className="spacing"></div>
      </div>
    </>
  );
};

export default Home;
