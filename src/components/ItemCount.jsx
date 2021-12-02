import { useState } from "react";
const ItemCount = ({ stockInicial = 0 }) => {
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(stockInicial);

  const sum = () => {
    if (stock > count) setCount(count + 1);
  };
  const rest = () => {
    if (0 < count) setCount(count - 1);
  };
  const onAdd = (e) => {
    if (stock - count === 0) {
      e.target.classList.add("disabled");
    }
    setStock(stock - count);
    setCount(0);
    console.log(stock);
  };
  return (
    <div>
      <span className="me-4">Stock: {stock}</span>
      <button type="button" className="btn btn-primary me-1" onClick={rest}>
        -
      </button>
      <span className="px-2">Cantidad: {count} </span>
      <button
        type="button"
        className="btn btn-primary dim-bottom"
        onClick={sum}
      >
        +
      </button>

      <button type="button" className="btn btn-info ms-3" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
