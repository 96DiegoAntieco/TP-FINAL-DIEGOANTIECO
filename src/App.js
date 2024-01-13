import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Logoimg from "./components/img/LogoEmpresa.png";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CardPovider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CardPovider>
          <NavBar img={Logoimg} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </CardPovider>
      </BrowserRouter>
    </div>
  );
}

export default App;
