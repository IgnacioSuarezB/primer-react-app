//import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <section>
      <h1>{greeting}</h1>
      <ItemList />
    </section>
  );
};

export default ItemListContainer;
