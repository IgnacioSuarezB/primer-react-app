import { formatPrice } from "../../services/services";

const CartItem = ({ item, removeItem, changeQuantity }) => {
  return (
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
        <h4 className="fs-5 text-start">{item.title}</h4>
        <p className="text-start fs-6 mx-3 my-0">
          Stock disponible: {item.stock}
        </p>
      </div>
      <div className="col-2">
        <input
          className="col-3 text-center"
          type="number"
          defaultValue={item.quantity}
          onChange={(e) => changeQuantity(item, e.target.value)}
          min={0}
          max={item.stock}
          step={1}
        />
        <span> x {formatPrice(item.price)}</span>
      </div>
      <div className="col-2">
        <span>$ {formatPrice(item.price * item.quantity)}</span>
      </div>
      <div className="col-1">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => removeItem(item.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
