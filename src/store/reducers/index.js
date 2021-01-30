import { combineReducers } from "redux";

import posts from "./posts";
import users from "./users";

export default combineReducers({
  posts,
  users,
});
