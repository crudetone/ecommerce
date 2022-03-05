import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: false,
  isFetching: false
}

const reducers = {
  loginStart: (state: any) => {
    state.isFetching = true;
  },
  loginSuccess: (state: any, { payload }: any) => {
    state.isFetching = false;
    state.currentUser = payload;
  },
  loginFailure: (state: any) => {
    state.isFetching = false;
    state.error = true;
  }
}

const userRedux = createSlice({
  name: 'user',
  initialState,
  reducers
})

export const { loginFailure, loginStart, loginSuccess } = userRedux.actions;
export default userRedux.reducer;