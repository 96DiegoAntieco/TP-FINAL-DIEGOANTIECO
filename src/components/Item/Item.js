import { Link } from "react-router-dom";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const Item = ({ id, nombre, imagen, precio, stock }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem({ id, nombre, imagen, precio }, cantidad);
  };

  return (
    <article className="Card">
      <header className="Header">
        <h2 className="infoheader">{nombre}</h2>
      </header>
      <picture>
        <img src={imagen} alt={nombre} width={300} height={300} />
      </picture>
      <section>
        <p className="info">precio: ${precio}</p>
        <p className="info">stock disponible: {stock}</p>
        <ItemCount stock={stock} onAdd={onAdd} />
      </section>
      <footer className="itemFooter">
        <Link to={`/item/${id}`} className="opcion">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
