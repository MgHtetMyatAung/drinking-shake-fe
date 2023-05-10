import { createSlice } from "@reduxjs/toolkit";

export const addToCardSlice = createSlice({
  name: "cardList",
  initialState: {
    card: [],
  },
  reducers: {
    addCard: (state, { payload }) => {
      const data = { ...payload, qty: 1 };
      state.card.find((item) => item.id === payload.id)
        ? (state.card = state.card)
        : (state.card = [...state.card, data]);
    },
    removeCard: (state, { payload }) => {
      state.card = state.card.filter((item) => item.id !== payload.id);
    },
    removeAllCard: (state) => {
      state.card = [];
    },
    addQty: (state, { payload }) => {},
  },
});

export const { addCard, removeAllCard, removeCard } = addToCardSlice.actions;
export default addToCardSlice.reducer;
