import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  console.log("productos", productos);
  return (
    <div className="grupo">
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
