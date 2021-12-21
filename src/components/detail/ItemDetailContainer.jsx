import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../general/Loader";
//import { getItemById } from "../../services/services";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { paramId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "items", paramId))
      .then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data() };
        setItem(product);
      })
      .catch((err) => {
        console.log(err);
      });
    /*let datosItem = getItemById(paramId);
    datosItem.then((itemPromesa) => {
      setItem(itemPromesa);
    });*/
  }, [paramId]);

  return (
    <section className="mt-3">
      {Object.keys(item).length === 0 ? <Loader /> : <ItemDetail item={item} />}
    </section>
  );
};

export default ItemDetailContainer;
