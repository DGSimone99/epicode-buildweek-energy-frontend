import { GET_FATTURE } from "../action";

const initialState = {
  fatture: [],
};

export const fattureReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FATTURE:
      return {
        ...state,
        fatture: action.payload,
      };
    default:
      return state;
  }
};

export default fattureReducer;
