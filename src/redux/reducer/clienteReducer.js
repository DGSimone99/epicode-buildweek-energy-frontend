import { GET_CLIENTE } from "../action";

const initialState = {
  cliente: {},
};

const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTE:
      return {
        cliente: action.payload,
      };
    default:
      return state;
  }
};

export default clienteReducer;
