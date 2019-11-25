const initialState = {
  counter: 0,
  orderData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_ORDER":
      let updatedOrderData = state.orderData.concat({
        title: action.orderData.title,
        price: action.orderData.price,
        typeOfOrder: action.orderData.typeOfOrder
      });
      return {
        ...state,
        counter: state.counter + 1,
        orderData: updatedOrderData
      };
    case "CART_INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "CART_DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
  }
  return state;
};

export default reducer;
