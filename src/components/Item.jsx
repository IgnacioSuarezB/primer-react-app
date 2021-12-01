//import ItemCount from "./ItemCount";

const Item = ({ item }) => {
  return (
    <div style={{ width: 250 }} className="border border-1 m-2 p-0">
      <img src={item.url} className="card-img-top " alt="..." />
      <div className="card-body">
        <h3>{item.title}</h3>
        <h4>$ {item.price}</h4>
        <p className="fs-5">{item.description}</p>
        <p className="fs-6 ">Ver más</p>
      </div>
    </div>
  );
};

export default Item;
