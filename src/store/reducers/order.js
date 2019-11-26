const initialState = {
  counter: 0,
  orderData: []
};

const reducer = (state = initialState, action) => {
  const generateId = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  switch (action.type) {
    case "REGISTER_ORDER":
      let updatedOrderData = state.orderData.concat({
        title: action.orderData.title,
        price: action.orderData.price,
        updatedPrice: action.orderData.price,
        typeOfOrder: action.orderData.typeOfOrder,
        id: generateId()
      });
      console.log(updatedOrderData[0].id);
      return {
        ...state,
        counter: state.counter + 1,
        orderData: updatedOrderData
      };
    case "CART_INCREMENT":
      let copyOrderDataInc = [...state.orderData];
      let currentObjectInc = copyOrderDataInc.find(
        currentObj => currentObj.id === action.id
      );

      currentObjectInc.updatedPrice += currentObjectInc.price;

      return {
        ...state,
        counter: state.counter + 1,
        orderData: copyOrderDataInc
      };

    case "CART_DECREMENT":
      let copyOrderDataDec = [...state.orderData];
      let currentObjectDec = copyOrderDataDec.find(
        currentObj => currentObj.id === action.id
      );
      currentObjectDec.updatedPrice -= currentObjectDec.price;

      return {
        ...state,
        counter: state.counter - 1,
        orderData: copyOrderDataDec
      };
  }
  return state;
};

export default reducer;
