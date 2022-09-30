const intState = {
  counter: 0,
};

export const Ruducer = (state = intState, action) => {
  switch (action.type) {
    case "int":
      return {
        counter: state.counter + action.payload,
      };
    case "dec":
      if (state.counter === 0) {
        return {
          counter: (state.counter = 0),
        };
      } else {
        return {
          counter: state.counter - action.payload,
        };
      }

    default:
      return state;
  }
};
