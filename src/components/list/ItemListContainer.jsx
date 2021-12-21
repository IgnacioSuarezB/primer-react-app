import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
//import { getItems } from "../../services/services";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let products = [];
    if (!categoryId) {
      getDocs(collection(db, "items")).then((querySnapshot) => {
        products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(products);
      });
    }
    if (categoryId) {
      getDocs(
        query(collection(db, "items"), where("category", "==", categoryId))
      ).then((querySnapshot) => {
        products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(products);
      });
    }

    /*const datosAPI = getItems();
    datosAPI.then((itemsPromesa) => {
      if (categoryId)
        itemsPromesa = itemsPromesa.filter(
          (item) => item.category === categoryId
        );
      setItems(itemsPromesa);
    });*/
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
