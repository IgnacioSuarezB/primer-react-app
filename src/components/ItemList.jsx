import { useEffect, useState } from "react";
import Item from "./Item";
const itemsAPI = [
  {
    title: "Pelota",
    price: "500",
    description: "Lorem Ipmsum de Pelota, description",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg",
  },
  {
    title: "Gorra",
    price: "150",
    description: "Lorem Ipmsum de Gorra, description",
    url: "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/m/a/marino_1.jpg",
  },
  {
    title: "Botines",
    price: "300",
    description: "Lorem Ipmsum de Botines, description",
    url: "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/baa193a472891718a9656a0f6c3cd266/b/o/botines-de-futbol-adidas-predator-20-3-fg-negro-20111357-100010ef1645001-1.jpg",
  },
];

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let datosAPI = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(itemsAPI);
      }, 2000);
    });
    datosAPI.then((itemsPromesa) => {
      setItems(itemsPromesa);
    });
  }, []);
  return (
    <div className="row justify-content-center">
      {/* <Item item={items[0]} />
      <Item item={items[1]} />
      <Item item={items[0]} />
  <Item item={items[1]} /> */}
      {items.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  );
};

export default ItemList;
