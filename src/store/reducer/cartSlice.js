const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        // If the item already exists, increment its quantity
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        return [...state, { ...action.payload, quantity: 1 }];
      }

    // other cases...

    default:
      return state;
  }
};

export default cartReducer;
