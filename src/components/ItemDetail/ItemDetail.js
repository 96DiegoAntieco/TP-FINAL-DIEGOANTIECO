import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Producto = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const product = doc(db, "items", id);
    getDoc(product).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto({ id: snapshot.id, ...snapshot.data() });
      }
    });
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-end">
          <img
            src={producto.imagen}
            alt={producto.titulo}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 text-start">
          <h1>{producto.titulo}</h1>
          <h5>{producto.calorias} kcal</h5>
          <p>{producto.descripcion}</p>
          <p>
            <b>${producto.precio}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Producto;
