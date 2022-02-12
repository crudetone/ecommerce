import { bindActionCreators, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 0,
  total: 0
}

const reducers = {
  addProducts: (state: any, { payload }: any) => {
    state.quantity += 1;
    state.products.push(payload.products);
    state.total += payload.price;
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers
})

export const { addProducts } = cartSlice.actions;
export default cartSlice.reducer;