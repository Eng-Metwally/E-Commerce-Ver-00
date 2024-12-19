export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
  });

  export const updateProductQuantity = (product, quantity) => {
    return {
      type: 'UPDATE_PRODUCT_QUANTITY',
      payload: { product, quantity },
    };
  };


  
  
  

  

  