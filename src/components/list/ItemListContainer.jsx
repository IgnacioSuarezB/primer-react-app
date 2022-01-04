import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/firebase";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
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
    // if (!categoryId) {
    //   getDocs(collection(db, "items")).then((querySnapshot) => {
    //     products = querySnapshot.docs
    //       .map((doc) => {
    //         return { id: doc.id, ...doc.data() };
    //       })
    //       .catch((error) => {
    //         console.log("Error searching items", error);
    //       });
    //     setItems(products);
    //   });
    // }
    // if (categoryId) {
    //   getDocs(
    //     query(collection(db, "items"), where("category", "==", categoryId))
    //   ).then((querySnapshot) => {
    //     products = querySnapshot.docs
    //       .map((doc) => {
    //         return { id: doc.id, ...doc.data() };
    //       })
    //       .catch((error) => {
    //         console.log("Error searching items", error);
    //       });
    //     setItems(products);
    //   });
    // }
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
