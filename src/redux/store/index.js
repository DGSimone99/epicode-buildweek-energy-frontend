import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/loginReducer";
import clientiReducer from "../reducer/clientiReducer";

const mainReducer = combineReducers({
  login: loginReducer,
  clienti: clientiReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
