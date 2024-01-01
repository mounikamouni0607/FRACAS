function HandleHeaderClick(
  key,
  setProducts,
  products,
  sortDirection,
  setSortDirection
) {
  const id = key.target.id;
  console.log("this is on filter on + " + id);
  // Sort products based on the clicked header (id)
  const sortedProducts = [...products].sort((a, b) => {
    if (sortDirection === "ASC") {
      if (a[id] < b[id]) {
        return -1;
      }
      if (a[id] > b[id]) {
        return 1;
      }
      return 0;
    } else {
      if (a[id] < b[id]) {
        return 1;
      }
      if (a[id] > b[id]) {
        return -1;
      }
      return 0;
    }
  });
  if (sortDirection === "ASC") {
    setSortDirection("DESC");
  } else {
    setSortDirection("ASC");
  }

  // Update the state with the sorted products
  setProducts(sortedProducts);
}
export default HandleHeaderClick;
