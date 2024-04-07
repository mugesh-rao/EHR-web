// reducers/index.js
import { combineReducers } from "redux";
import wishlistReducer from "./wishListActions";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
 
});

export default rootReducer;
