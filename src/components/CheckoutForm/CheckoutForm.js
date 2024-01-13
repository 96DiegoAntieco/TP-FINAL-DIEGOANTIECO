import { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirmado }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirmado = (e) => {
    e.preventDefault();

    const userData = {
      nombre,
      telefono,
      email,
    };

    onConfirmado(userData);
  };

  return (
    <div className="contenedor">
      <form onSubmit={handleConfirmado} className="form">
        <div className="input-group">
          <label>
            Nombre
            <input
              className="inputs"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label>
            Telefono
            <input
              className="inputs"
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              className="inputs"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="boton">
            <button type="submit" className="button">
              Crear Orden{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
