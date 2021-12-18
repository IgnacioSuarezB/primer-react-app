import Item from "./Item";
import Loader from "../general/Loader";

const ItemList = ({ items }) => {
  return (
    <div className="row justify-content-center">
      {items.length === 0 ? (
        <Loader />
      ) : (
        items.map((item, index) => <Item item={item} key={index} />)
      )}
    </div>
  );
};

export default ItemList;
