import { LOAD_USERS, LOAD_USERS_SUCCESS } from "./constants";

export function loadUsers() {
  console.log("load user action was called");

  return {
    type: LOAD_USERS,
    payload: { 1: "name", 2: "pritam", 3: "adi" }
  };
}

export function loadUsersSuccess(shortStories) {
  console.log("load user success action was called");
  return {
    type: LOAD_USERS_SUCCESS
  };
}
