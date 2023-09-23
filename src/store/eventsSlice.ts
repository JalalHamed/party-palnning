import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { persistReducer } from 'redux-persist';
import { ICreatedEvent, IEvents } from 'types';

const initialState: IEvents = {
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<ICreatedEvent>) => {
      state.events.push(action.payload);
    },
  },
});

const persistedEventsReducer = persistReducer(
  { key: 'events', storage: localforage },
  eventsSlice.reducer
);

export const { addEvent } = eventsSlice.actions;
export default persistedEventsReducer;
