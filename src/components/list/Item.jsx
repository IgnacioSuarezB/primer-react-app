import { Link } from "react-router-dom";
import { formatPrice } from "../../services/services";
const Item = ({ item = [] }) => {
  return (
    <div style={{ width: 250 }} className="border border-1 m-2 p-0">
      <Link to={`/item/${item.id}`} className="text-decoration-none text-light">
        <div
          className="border-bottom text-center bg-light d-flex align-items-center justify-content-center"
          style={{ height: 250 }}
        >
          <img
            style={{
              maxWidth: 250,
              maxHeight: 250,
            }}
            src={item.url}
            className=""
            alt="..."
          />
        </div>
        <div className="card-body">
          <h4 className="fs-3 text-start">$ {formatPrice(item.price)}</h4>
          <h3 className="fs-5 fw-light text-start">{item.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Item;
