export const getAllProducts = (state) => state.products.products;

export const getProductById = (id) => (state) =>
  state.products.products.find((_) => _.id === id);

export const getProductsByCategory = (id) => (state) =>
  state.products.products.filter((_) => _.category === id);

export const getCategoriesUniqNames = (state) =>
  state.products.products
    .map((_) => _.category)
    .filter((age, index, arr) => arr.indexOf(age) === index)
    .sort();
