import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getItems } from "../../services/services";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
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
    <section>
      <h1>
        {greeting} {categoryId}
      </h1>
      <ItemList items={items} />
    </section>
  );
};

export default ItemListContainer;
