import { createSlice } from "@reduxjs/toolkit";

export const addToCardSlice = createSlice({
  name: "cardList",
  initialState: {
    card: [],
  },
  reducers: {
    addCard: (state, { payload }) => {
      state.card= [...state.card,payload]
    },
    removeCard: (state, { payload }) => {
      state.card = state.card.filter((item) => item.id !== payload.id);
    },
    removeAllCard: (state) => {
      state.card = [];
    },
  },
});

export const { addCard, removeAllCard, removeCard } = addToCardSlice.actions;
export default addToCardSlice.reducer;
