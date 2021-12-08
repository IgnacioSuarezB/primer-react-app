import { useEffect, useState } from "react";
import Item from "./Item";
const itemsAPI = [
  {
    id: 0,
    title: "Pelota",
    price: "500",
    description: "Lorem Ipmsum de Pelota, description",
    detail: `- COSTURA: COSIDA A MANO
    - CIRCUNFERENCIA: 68-70 cm.
    - FUTSAL
    - PESO: 420 a 450 Gr.
    - PRESIÓN DE AIRE: 0.9 - 1.1 BAR.
    - CÁMARA: butilo.
    - MATERIAL: CUERO PU.
    - PANELES: 32
    - VÁLVULA: butilo.
    - USO: semi match.
    - CAMPO: para uso interno.
    - ORIGEN: Pakistan.`,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg",
  },
  {
    id: 1,
    title: "Gorra",
    price: "150",
    description: "Lorem Ipmsum de Gorra, description",
    url: "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/m/a/marino_1.jpg",
  },
  {
    id: 2,
    title: "Botines",
    price: "300",
    description: "Lorem Ipmsum de Botines, description",
    url: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/baa193a472891718a9656a0f6c3cd266/b/o/botines-de-futbol-adidas-predator-20-3-fg-negro-20111357-100010ef1645001-1.jpg",
  },
];
const ItemList = () => {
  const [items, setItems] = useState([]);
  //Simulación de la API (traigo todos items)
  useEffect(() => {
    let datosAPI = new Promise(function (resolve) {
      setTimeout(function () {
        resolve(itemsAPI);
      }, 1000);
    });
    datosAPI.then((itemsPromesa) => {
      setItems(itemsPromesa);
    });
  }, []);
  return (
    <div className="row justify-content-center">
      {items.length === 0 ? (
        <div
          className="spinner-border text-danger"
          style={{ width: "3rem", height: "3rem", margin: "5rem 0 0 0" }}
          role="status"
        ></div>
      ) : (
        items.map((item, index) => <Item item={item} key={index} />)
      )}
    </div>
  );
};

export default ItemList;
