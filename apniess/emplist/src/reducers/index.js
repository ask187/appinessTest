import { combineReducers } from "redux";
import setDataReducer from "./setData";
export default combineReducers({
  data: setDataReducer
});
