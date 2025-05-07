import { GET_CLIENTI } from "../action";

const initialState = {
  clienti: [],
};

const clientiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTI:
      return {
        ...state,
        clienti: action.payload,
      };
    default:
      return state;
  }
};

export default clientiReducer;
