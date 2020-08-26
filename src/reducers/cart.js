const cartReducerDefaultState = [];

export default (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return [
        ...action.cart
      ];
    case 'ADD_TO_CART':
      return [
        ...state,
        action.product
      ];
      case 'EDIT_Q_TO_CART':
        return  state.map((product) => {
          if (product.id === action.id) {
            return {
              ...product,
              quantity:action.quantity
            };
          } else {
            return product;
          };
        });
    case 'REMOVE_FROM_CART':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};