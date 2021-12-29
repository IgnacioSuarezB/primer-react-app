const Loader = () => {
  return (
    <div
      className="spinner-border text-danger"
      style={{ width: "3rem", height: "3rem", margin: "5rem 0 0 0" }}
      role="status"
    ></div>
  );
};

export default Loader;

/*arrayItems.forEach(async (item) => {
  documentSnapshot = await getDoc(doc(db, "items", item.id));
  if (documentSnapshot.data().stock >= item.quantity) {
    console.log("update", documentSnapshot.id);
    batch.update(doc(db, "items", documentSnapshot.id), {
      stock: documentSnapshot.data().stock - item.quantity,
    });
  }
});
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
const start = async () => {
  asyncForEach(arrayItems, async (item) => {
    documentSnapshot = await getDoc(doc(db, "items", item.id));
    if (documentSnapshot.data().stock >= item.quantity) {
      console.log("update", documentSnapshot.id);
      batch.update(doc(db, "items", documentSnapshot.id), {
        stock: documentSnapshot.data().stock - item.quantity,
      });
    }
  });
  console.log("fins");
};*/
