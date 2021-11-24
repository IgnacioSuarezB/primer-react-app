import { useState } from "react";
const ItemCount = ({ stockInicial }) => {
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(stockInicial);

  const sum = () => {
    if (stock > count) setCount(count + 1);
  };
  const rest = () => {
    if (0 < count) setCount(count - 1);
  };
  const onAdd = () => {
    setStock(stock - count);
    setCount(0);
  };
  return (
    <div class="border border-light mb-3 p-3">
      <p>Stock: {stock}</p>
      <button type="button" class="btn btn-primary me-1" onClick={rest}>
        -
      </button>
      <span class="px-2">Cantidad: {count} </span>
      <button type="button" class="btn btn-primary dim-bottom" onClick={sum}>
        +
      </button>
      <button
        type="button"
        class="btn btn-info d-block mx-auto mt-2"
        onClick={onAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
