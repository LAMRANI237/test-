const initialState = {
    products: [],
    error: null,
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS_SUCCESS":
        return { ...state, products: action.payload };
      case "ADD_PRODUCT_SUCCESS":
        return { ...state, products: [...state.products, action.payload] };
      case "DELETE_PRODUCT_SUCCESS":
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
      case "FETCH_PRODUCTS_ERROR":
        return { ...state, error: action.error };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  