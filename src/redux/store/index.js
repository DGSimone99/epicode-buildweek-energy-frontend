import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/loginReducer";
import clientiReducer from "../reducer/clientiReducer";
import clienteReducer from "../reducer/clienteReducer";

const mainReducer = combineReducers({
  login: loginReducer,
  clienti: clientiReducer,
  cliente: clienteReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
