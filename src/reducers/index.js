import { combineReducers } from "redux";
import listaReducer from "./listaReducer";


const rootReducers = combineReducers({
  lista: listaReducer,

});

export default rootReducers;
