import { Link } from "react-router-dom";
const Item = ({ item = [] }) => {
  return (
    <div style={{ width: 250 }} className="border border-1 m-2 p-0">
      <img src={item.url} className="card-img-top " alt="..." />
      <div className="card-body">
        <h3>{item.title}</h3>
        <h4>$ {item.price}</h4>
        <p className="fs-5">{item.description}</p>
        {/* <button className="btn btn-dark ">Ver más</button> */}
        <Link to={`/detail/${item.id}`} className="btn btn-dark ">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
