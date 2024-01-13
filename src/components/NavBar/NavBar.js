import { Link, NavLink } from "react-router-dom";
import CartWiget from "../CartWidget/CartWidget";

function NavBar(props) {
  const { img } = props;
  return (
    <nav className="hero is-danger ">
      <div className="columns ">
        <div className="column is-4">
          <figure>
            <Link to="/">
              <img className="image is-128x128 ml-10" src={img} alt="Logo" />
            </Link>
          </figure>
        </div>
        <div className="column is-flex is-align-items-center ">
          <NavLink
            to={`/categoria/autos`}
            className="button is-dark  is-rounded mr-8"
          >
            Autos
          </NavLink>
          <NavLink
            to={`/categoria/camionetas`}
            className="button  is-dark  is-rounded mr-8"
          >
            Camionetas
          </NavLink>
          <NavLink
            to={`/categoria/contacto`}
            className="button is-dark  is-rounded mr-8"
          >
            Contacto
          </NavLink>
        </div>
        <div className="column is-flex is-align-items-center ml-5">
          <CartWiget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
