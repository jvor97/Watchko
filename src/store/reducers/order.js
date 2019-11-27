const initialState = {
  counter: 0,
  orderData: [],
  finalPrice: 0
};

const sumOrderPrice = state => {
  let orderDataSum = [...state.orderData];
  let sum = orderDataSum.reduce(
    (acc, singleOrder) => acc + singleOrder.updatedPrice,
    0
  );
  return sum;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_ORDER":
      // console.log(updatedOrderData[0].id);
      let updatedOrderData = state.orderData.concat({
        title: action.orderData.title,
        price: action.orderData.price,
        updatedPrice: action.orderData.price,
        typeOfOrder: action.orderData.typeOfOrder,
        id: action.orderData.id
      });
      return {
        ...state,
        counter: state.counter + 1,
        orderData: updatedOrderData
      };
    case "SUM_PRICE":
      return {
        ...state,
        finalPrice: sumOrderPrice(state)
      };

    // case "CART_INCREMENT":
    //   let copyOrderDataInc = [...state.orderData];
    //   let currentObjectInc = copyOrderDataInc.find(
    //     currentObj => currentObj.id === action.id
    //   );

    //   currentObjectInc.updatedPrice += currentObjectInc.price;

    //   return {
    //     ...state,
    //     counter: state.counter + 1,
    //     orderData: copyOrderDataInc,
    //     finalPrice: sumOrderPrice()
    //   };

    // case "CART_DECREMENT":
    //   let copyOrderDataDec = [...state.orderData];
    //   let currentObjectDec = copyOrderDataDec.find(
    //     currentObj => currentObj.id === action.id
    //   );
    //   currentObjectDec.updatedPrice -= currentObjectDec.price;

    //   return {
    //     ...state,
    //     counter: state.counter - 1,
    //     orderData: copyOrderDataDec,
    //     finalPrice: sumOrderPrice()
    //   };
  }
  return state;
};

export default reducer;
