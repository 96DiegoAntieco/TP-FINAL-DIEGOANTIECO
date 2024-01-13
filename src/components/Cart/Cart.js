import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalCantidad, totalPrecio } =
    useContext(CartContext);

  if (totalCantidad() === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="opcion">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${totalPrecio()}</h3>
      <button onClick={() => clearCart()} className="button">
        {" "}
        Limpiar carrito{" "}
      </button>
      <Link to="/checkout" className="opcion">
        checkout
      </Link>
    </div>
  );
};

export default Cart;
