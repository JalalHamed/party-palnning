import { createSlice } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { persistReducer } from 'redux-persist';
import { IEvents } from 'types';

const initialState: IEvents[] | [] = [];

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    // createEvent
  },
});

const persistedEventsReducer = persistReducer(
  { key: 'events', storage: localforage },
  eventsSlice.reducer
);

// export const {  } = eventsSlice.actions;
export default persistedEventsReducer;
