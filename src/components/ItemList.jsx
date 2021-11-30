import Item from "./Item";
const items = [
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
];
const ItemList = () => {
  return (
    <div className="row justify-content-center">
      <Item item={items[0]} />
      <Item item={items[1]} />
      <Item item={items[0]} />
      <Item item={items[1]} />
    </div>
  );
};

export default ItemList;
