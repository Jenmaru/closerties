import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from './pagesSlice.js';

export default configureStore({
  reducer: {
    pages: pagesReducer,
  },
});
