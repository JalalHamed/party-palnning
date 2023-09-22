import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { persistReducer } from 'redux-persist';
import { IHistory } from 'types';

const initialState: IHistory[] = [];

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<IHistory>) => {
      state.push(action.payload);
    },
  },
});

const persistedHistoryReducer = persistReducer(
  { key: 'history', storage: localforage },
  historySlice.reducer
);

export const { addHistory } = historySlice.actions;
export default persistedHistoryReducer;
