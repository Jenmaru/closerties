import { createSlice } from '@reduxjs/toolkit';

const initialState = { show: false, type: 'closed', id: null };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    closeModal: () => initialState,
  },
});

const { actions } = modalSlice;
export { actions };
export default modalSlice.reducer;
