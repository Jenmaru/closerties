import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState({ messages: [] });

const messages = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    sendMessage: (state, { payload }) => {
      const { messages } = state;
      messages.unshift(payload);
    },
  },
});

export const { actions } = messages;
export default messages.reducer;
