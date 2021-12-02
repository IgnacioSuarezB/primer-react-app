import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
const itemsAPI = [
  {
    title: "Pelota",
    price: "500",
    stock: 10,
    description: "Lorem Ipmsum de Pelota, description",
    detail: `- CIRCUNFERENCIA: 68-70 cm.
    - PESO: 420 a 450 Gr.
    - PRESIÓN DE AIRE: 0.9 - 1.1 BAR.
    - CÁMARA: butilo.
    - MATERIAL: CUERO.
    - CAMPO: para uso interno.
    - ORIGEN: Pakistan.`,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg",
  },
  {
    title: "Gorra",
    price: "150",
    stock: 5,
    description: "Lorem Ipmsum de Gorra, description",
    url: "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/m/a/marino_1.jpg",
  },
  {
    title: "Botines",
    price: "300",
    stock: 0,
    description: "Lorem Ipmsum de Botines, description",
    url: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/baa193a472891718a9656a0f6c3cd266/b/o/botines-de-futbol-adidas-predator-20-3-fg-negro-20111357-100010ef1645001-1.jpg",
  },
];

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  //Simulación de la API (traigo solo 1 item)
  useEffect(() => {
    let datosItem = new Promise(function (resolve) {
      setTimeout(function () {
        resolve(itemsAPI[0]);
      }, 2000);
    });
    datosItem.then((itemPromesa) => {
      setItem(itemPromesa);
    });
  }, []);

  return (
    <section className="mt-3">
      <ItemDetail item={item} />
    </section>
  );
};

export default ItemDetailContainer;
