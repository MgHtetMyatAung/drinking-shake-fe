import { configureStore } from "@reduxjs/toolkit";
import addToCardReducer from "../features/addToCardSlice";

export const store = configureStore({
  reducer: {
    cardList: addToCardReducer,
  },
});
