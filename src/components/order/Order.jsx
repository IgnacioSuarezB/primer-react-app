import { Link } from "react-router-dom";
import { formatPrice } from "../../services/services";

const Order = ({ order, buyId }) => {
  return (
    <div>
      {buyId ? <h1>Gracias por su compra</h1> : <h1>Resumen de Compra</h1>}
      <h3 className="mb-5">Numero de Orden: {order.id}</h3>
      {order.items.map((item) => (
        <div
          className="items d-flex flex-row align-items-center mb-4"
          key={item.id}
        >
          <div className="col-2 bg-light">
            <img
              className="img-fluid"
              src={item.url}
              alt={item.title}
              style={{
                maxHeight: 150,
              }}
            />
          </div>
          <div className="col-5 ms-3 mt-2 align-self-start">
            <Link
              to={`/item/${item.id}`}
              className="text-decoration-none text-light"
            >
              <h4 className="fs-5 text-start">{item.title}</h4>
            </Link>
            <p className="text-start fs-6 mx-3 my-0">{item.description}</p>
          </div>
          <div className="col-2">
            <span>{item.quantity}</span>
            <span> x {formatPrice(item.price)}</span>
          </div>
          <div className="col-2">
            <span>$ {formatPrice(item.price * item.quantity)}</span>
          </div>
          <div className="col-1"></div>
        </div>
      ))}
    </div>
  );
};

export default Order;
