import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/firebase";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setItems([]);
    !categoryId
      ? getProducts()
          .then((products) => setItems(products))
          .catch((error) => {
            console.log("Error searching items", error);
          })
      : getProducts("category", "==", categoryId)
          .then((products) => setItems(products))
          .catch((error) => {
            console.log("Error searching items", error);
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
