import { createSelector } from "reselect";

const selectUsers = state => state.get("users");
const userSelector = () =>
  createSelector(
    selectUsers,
    state => state.toJS()
  );

export { userSelector };
