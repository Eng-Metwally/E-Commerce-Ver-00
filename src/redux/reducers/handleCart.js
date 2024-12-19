
const initialState = {
  items: [],
};

const handleCart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case 'UPDATE_PRODUCT_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.product.id) {
            if (action.payload.quantity < 1) {
              return { ...item, quantity: 0 };
            }
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }).filter(item => item.quantity > 0),
      };

    default:
      return state;
  }
};

export default handleCart;
 