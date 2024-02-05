import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();
const initialState = { show: false, type: '1' };

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    openPage: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});

const { actions } = pagesSlice;
const selectors = channelsAdapter.getSelectors((state) => state.pages);
export { actions, selectors };
export default pagesSlice.reducer;
