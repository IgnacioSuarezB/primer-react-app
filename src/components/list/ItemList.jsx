import { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import Loader from "../general/Loader";
import { getItems } from "../../services/services";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setItems([]);
    const datosAPI = getItems();
    datosAPI.then((itemsPromesa) => {
      if (categoryId)
        itemsPromesa = itemsPromesa.filter(
          (item) => item.category === categoryId
        );
      setItems(itemsPromesa);
    });
  }, [categoryId]);
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
