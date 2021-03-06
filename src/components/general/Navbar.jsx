import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "../../App.css";
import NavbarLogin from "../login/NavbarLogin";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-2 border-dark">
      <div className="container-fluid container maxWidth ">
        <Link to={"/"} className="navbar-brand bg-danger px-2 rounded-3 ">
          Deporto2!
        </Link>
        <div className="collapse navbar-collapse fs-5" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/calzado"} className="nav-link">
                Calzado
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/indumentaria"} className="nav-link">
                Indumentaria
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/accesorios"} className="nav-link">
                Accesorios
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/cart"} className="nav-link">
                Carrito
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/order/0"} className="nav-link">
                Compras
              </Link>
            </li>
          </ul>
        </div>
        <NavbarLogin />
        <Link to={"/cart"} className=" text-decoration-none d-flex">
          <CartWidget />
          <img
            style={{ height: 45 }}
            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-trolley-images-pixabay-download-pictures-14.png"
            alt="Carrito de compra"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
