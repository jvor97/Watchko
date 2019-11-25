const initialState = {
  counter: 0,
  orderData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_ORDER":
      let updatedOrderData = state.orderData.concat({
        title: action.orderData.title,
        price: action.orderData.price
      });
      return {
        ...state,
        counter: state.counter + 1,
        orderData: updatedOrderData
      };
  }
  return state;
};

export default reducer;
