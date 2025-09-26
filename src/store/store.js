import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";
import usersReducer from "./userSlice";

export default configureStore({
  reducer: {
    // this generates the first part of the state eg: state.products
    products: productsReducer,
    users: usersReducer,
    cart: cartReducer,
  },
});
