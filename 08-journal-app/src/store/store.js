import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";

// El store solo puede recibir un reducer, por eso se necesitan combinar antes de ser recibidos.

const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(reducers);
