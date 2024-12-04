import React, { useState } from "react";

const ProductForm = ({ initialValues = {}, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name || ""}
        onChange={handleChange}
        placeholder="Nom du produit"
        className="border rounded px-3 py-2 w-full"
      />
      <input
        type="number"
        name="price"
        value={formData.price || ""}
        onChange={handleChange}
        placeholder="Prix"
        className="border rounded px-3 py-2 w-full"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Enregistrer
      </button>
    </form>
  );
};

export default ProductForm;
