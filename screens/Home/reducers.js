import { LOAD_USERS, LOAD_USERS_SUCCESS } from "./constants";
import { fromJS } from "immutable";

export const initialState = fromJS({
  users: [],
  tester: []
});

function userLoadReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return state;
    case LOAD_USERS_SUCCESS:
      return state.set("users", action.result);

    default:
      return state;
  }
}

export default userLoadReducer;
