import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addProduct, deleteProduct } from "./redux/actions";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";


const App = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestion des Produits</h1>
      <ProductForm onSubmit={handleAddProduct} />
      <ProductTable products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default App;
