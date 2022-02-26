import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 0,
  total: 0
}

const reducers = {
  addProducts: (state: any, { payload }: any) => {
    const { price, quantity } = payload;
    state.quantity += 1;
    state.products.push(payload);
    state.total += price * quantity;
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers
})

export const { addProducts } = cartSlice.actions;
export default cartSlice.reducer;