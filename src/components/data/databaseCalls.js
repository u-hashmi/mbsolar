const fetchProductData = async (searchText, sorting) => {
  //fetch data with search text and sorting
  const params = `?searchText=${searchText}&sorting=${sorting}`;
 
  const url = `/api/products${params}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

//add product to database
const saveProductData = async (item) => {
  const url = "/api/addProducts";
  const options = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

//delete product from database
const deleteProductData = async (itemId) => {
  const url = `/api/deleteProducts/${itemId}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

//update product in database
const updateProductData = async (item) => {
  const url = "/api/updateProduct";
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => data);
  return response;
};

export { fetchProductData, saveProductData, deleteProductData, updateProductData };
