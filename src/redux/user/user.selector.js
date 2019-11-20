import { createSelector } from "reselect";

//这个selector用来记录所有的Items,[]里面是和下面的cart，user这样对应的
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
