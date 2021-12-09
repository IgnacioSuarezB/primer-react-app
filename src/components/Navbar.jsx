import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid container">
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
              <Link to={"/category/ropa"} className="nav-link">
                Ropa
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/deporte"} className="nav-link">
                Deporte
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/shopout"} className="nav-link">
                Carrito
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Soporte
              </a>
            </li>
          </ul>
        </div>
        <CartWidget height={45} />
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
