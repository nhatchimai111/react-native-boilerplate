import { combineReducers } from "redux-immutable";
// import all the reducers 
import userLoadReducer from "../screens/Home/reducers";

// combine all the reducers 
export default (rootReducer = combineReducers({
  users: userLoadReducer
}));
