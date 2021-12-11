import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../general/Loader";
import { getItemById } from "../../services/services";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { paramId } = useParams();

  useEffect(() => {
    let datosItem = getItemById(paramId);
    datosItem.then((itemPromesa) => {
      setItem(itemPromesa);
    });
  }, [paramId]);

  return (
    <section className="mt-3">
      {Object.keys(item).length === 0 ? <Loader /> : <ItemDetail item={item} />}
    </section>
  );
};

export default ItemDetailContainer;
