import ItemCount from "./ItemCount";
const ItemDetail = ({ item = [] }) => {
  console.log(item);
  return (
    <div className="text-start my-3">
      {item.stock === undefined ? null : (
        <div className="row align-items-start">
          <img src={item.url} className="col-3" alt={item.description} />
          <div className=" col-9">
            <h1>Detalles de {item.title}</h1>
            <span>Precio de lista: $ {item.price}</span>
            <p className="fs-5">Caracteristicas: {item.detail}</p>
            <ItemCount stockInicial={item.stock} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
