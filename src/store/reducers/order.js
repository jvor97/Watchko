const initialState = {
  counter: 0,
  orderData: [],
  finalPrice: 0,
  error: null,
  loading: false,
  messageSent: false
};

const sumOrderPrice = state => {
  let orderDataSum = [...state.orderData];
  let sum = orderDataSum.reduce(
    (acc, singleOrder) => acc + singleOrder.updatedPrice,
    0
  );
  return sum;
};

const getCurrentObj = (state, id) => {
  let copyOrderData = [...state.orderData];
  let currentObject = copyOrderData.find(currentObj => currentObj.id === id);
  return currentObject;
};

const groupDuplicatedOrders = updatedOrderData => {
  let copy = [...updatedOrderData];
  for (let i = 0; i < updatedOrderData.length; i++) {
    updatedOrderData[i].numOfOrders = copy.filter(
      movie =>
        movie.title === updatedOrderData[i].title &&
        movie.typeOfOrder === updatedOrderData[i].typeOfOrder
    ).length;
  }

  updatedOrderData = updatedOrderData.reduce((uniqueArr, object) => {
    if (
      !uniqueArr.some(
        obj =>
          obj.title === object.title && obj.typeOfOrder === object.typeOfOrder
      )
    ) {
      uniqueArr.push(object);
    }
    return uniqueArr;
  }, []);

  return updatedOrderData;
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

      updatedOrderData = groupDuplicatedOrders(updatedOrderData);

      return {
        ...state,
        counter: state.counter + 1,
        orderData: updatedOrderData,
        messageSent: false
      };
    case "SUM_PRICE":
      return {
        ...state,
        finalPrice: sumOrderPrice(state)
      };

    case "CART_INCREMENT":
      let copyOrderDataInc = [...state.orderData];
      let currentObjectInc = getCurrentObj(state, action.id);
      currentObjectInc.updatedPrice += currentObjectInc.price;
      copyOrderDataInc[action.id] = currentObjectInc;

      return {
        ...state,
        counter: state.counter + 1,
        orderData: copyOrderDataInc
      };

    case "CART_DECREMENT":
      let copyOrderDataDec = [...state.orderData];
      let currentObjectDec = getCurrentObj(state, action.id);
      currentObjectDec.updatedPrice -= currentObjectDec.price;
      copyOrderDataDec[action.id] = currentObjectDec;

      return {
        ...state,
        counter: state.counter - 1,
        orderData: copyOrderDataDec
      };
    case "CHECKOUT_START":
      return {
        ...state,
        loading: true
      };
    case "CHECKOUT_SENT":
      return {
        ...state,
        loading: false,
        messageSent: true,
        orderData: [],
        counter: 0
      };
    case "CHECKOUT_FAIL":
      return {
        ...state,
        error: action.error
      };
    case "DELETE_CARTITEM":
      let currentObjectDel = getCurrentObj(state, action.id);
      let itemCounter = currentObjectDel.updatedPrice / currentObjectDel.price;
      return {
        ...state,
        orderData: state.orderData.filter(delItem => delItem.id !== action.id),
        counter: state.counter - itemCounter
      };
  }
  return state;
};

export default reducer;
