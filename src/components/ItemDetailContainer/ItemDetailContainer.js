import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Productos = () => {
  const [producto, setProducto] = useState();
  const [productoNoEncontrado, setProductoNoEncontrado] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");

    // Consultando una collection completa
    getDocs(itemsCollection).then((snapshot) => {
      const productosAdaptados = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const producto = productosAdaptados.find(
        (producto) => producto.id == itemId
      );

      if (producto) {
        setProducto(producto);
      } else {
        setProductoNoEncontrado(true);
      }
    });
  }, [itemId]);

  if (productoNoEncontrado) {
    return <div>El producto no existe</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div key={producto?.id} className="col">
          <div className="card border-0">
            <Link to={"/item/" + producto?.id}>
              <img
                src={producto?.imagen}
                className="card-img-top"
                alt={producto?.nombre}
              />
            </Link>
            <div className="card-body">
              <p className="card-text">{producto?.nombre}</p>
              <p className="card-text">
                Precio ${producto?.precio}. Cantidad Dispinible:
                {producto?.stock}{" "}
              </p>
              <p className="card-text">{producto?.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
