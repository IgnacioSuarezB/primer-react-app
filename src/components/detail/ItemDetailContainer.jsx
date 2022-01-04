import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../general/Loader";
import { getItem } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { paramId } = useParams();

  useEffect(() => {
    getItem(paramId)
      .then((item) => setItem(item))
      .catch((err) => {
        console.log(err);
      });
  }, [paramId]);

  return (
    <section className="mt-3">
      {Object.keys(item).length === 0 ? <Loader /> : <ItemDetail item={item} />}
    </section>
  );
};

export default ItemDetailContainer;
