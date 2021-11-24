import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => (
  <div>
    <h1>{greeting}</h1>
    <ItemCount stockInicial={10} />
    <ItemCount stockInicial={5} />
    <ItemCount stockInicial={3} />
  </div>
);

export default ItemListContainer;
