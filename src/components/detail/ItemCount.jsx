import { useState } from "react";

const ItemCount = ({ stockInicial = 0, onAdd }) => {
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(stockInicial);

  const sum = () => (stock > count ? setCount(count + 1) : null);

  const rest = () => (0 < count ? setCount(count - 1) : null);

  const handleAdd = (e) => {
    if (stock - count === 0) e.target.classList.add("disabled");
    setStock(stock - count);
    setCount(0);
    onAdd(count);
  };
  return (
    <div>
      <span className="me-4 fs-4">Stock: {stock}</span>
      <button type="button" className="btn btn-primary me-1" onClick={rest}>
        -
      </button>
      <span className="px-2 fs-4">Cantidad: {count} </span>
      <button
        type="button"
        className="btn btn-primary dim-bottom"
        onClick={sum}
      >
        +
      </button>
      {stock === 0 ? (
        <>
          <button
            type="button"
            className="btn btn-success ms-3 fw-bold disabled"
            onClick={handleAdd}
          >
            Agregar al carrito
          </button>

          <button type="button" class="btn btn-danger ms-4">
            Sin Stock
          </button>
        </>
      ) : (
        <button
          type="button"
          className="btn btn-success ms-3 fw-bold"
          onClick={handleAdd}
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

export default ItemCount;
