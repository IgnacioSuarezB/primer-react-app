//import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  return (
    <section>
      <h1>
        {greeting} {categoryId}
      </h1>
      <ItemList />
    </section>
  );
};

export default ItemListContainer;
