// src/redux/actions.js
import axios from 'axios';

// Action pour récupérer les produits
export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/products'); // Remplacez par votre URL d'API
    dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
  };
};

// Action pour ajouter un produit
export const addProduct = (product) => {
  return async (dispatch) => {
    const response = await axios.post('/api/products', product); // Remplacez par votre URL d'API
    dispatch({ type: 'ADD_PRODUCT', payload: response.data });
  };
};

// Action pour supprimer un produit
export const deleteProduct = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/products/${id}`); // Remplacez par votre URL d'API
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };
};
