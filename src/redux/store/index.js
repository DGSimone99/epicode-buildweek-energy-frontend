import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/loginReducer";
import clientiReducer from "../reducer/clientiReducer";
import clienteReducer from "../reducer/clienteReducer";
import fattureReducer from "../reducer/fattureReducer";
import fatturaReducer from "../reducer/fatturaReducer";

const mainReducer = combineReducers({
  login: loginReducer,
  clienti: clientiReducer,
  cliente: clienteReducer,
  fatture: fattureReducer,
  fattura: fatturaReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
