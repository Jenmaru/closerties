import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from './pagesSlice.js';
import modalReducer from './Modals.js';
import messagesReducer from './Messages.js';

export default configureStore({
  reducer: {
    pages: pagesReducer,
    modal: modalReducer,
    messages: messagesReducer,
  },
});
