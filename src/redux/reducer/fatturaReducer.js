import { GET_FATTURA } from "../action";

const initialState = {
  fattura: {},
};

const fatturaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FATTURA:
      return {
        fattura: action.payload,
      };
    default:
      return state;
  }
};

export default fatturaReducer;
