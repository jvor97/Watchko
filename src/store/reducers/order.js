const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case "ORDER_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      };
  }
  return state;
};
