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
    addQty: (state, { payload }) => {
      state.card = state.card.map((item) =>
        item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decreaseQty: (state, { payload }) => {
      state.card = state.card.map((item) =>
        item.id === payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addCard, removeAllCard, removeCard, addQty,decreaseQty } =
  addToCardSlice.actions;
export default addToCardSlice.reducer;
