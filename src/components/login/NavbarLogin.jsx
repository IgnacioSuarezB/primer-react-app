import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { signOut } from "../../services/firebase";

const NavbarLogin = () => {
  const { user } = useContext(UserContext);
  const handleClick = () => signOut();
  return (
    <>
      {user ? (
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-danger me-3"
        >
          Salir
        </button>
      ) : (
        <Link to={"/login"} className=" text-decoration-none d-flex me-3">
          <button type="button" className="btn btn-primary">
            Ingresar
          </button>
        </Link>
      )}
    </>
  );
};

export default NavbarLogin;
