import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => (
  <div className="container">
    <h1>{greeting}</h1>
    <ItemList />
  </div>
);

export default ItemListContainer;
