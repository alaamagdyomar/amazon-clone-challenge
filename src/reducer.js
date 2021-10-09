export const initialState = {
  // start with empty basket
  basket: [
    // {
    //   id: "12345677546378",
    //   title:
    //     "The lean startup: How constant innovation creates radically Successful Businesses Paperback",
    //   price: 29.99,
    //   rating: 4,
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg ",
    // },
  ],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return {
        state,
      };
    default:
      return state;
  }
};

export default reducer;
