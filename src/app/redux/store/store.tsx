import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slice/cartSlice";
import filterReducer from "../store/slice/filterSlice"; // Import the filter slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer, // Ensure this is properly added
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
