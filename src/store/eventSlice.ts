import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { persistReducer } from 'redux-persist';
import { IEvent, TOccasion } from 'types';

const initialState: IEvent = {
  occasion: undefined,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addOccasion: (state, action: PayloadAction<TOccasion>) => {
      state.occasion = action.payload;
    },
  },
});

const persistedEventReducer = persistReducer(
  { key: 'event', storage: localforage },
  eventSlice.reducer
);

export const { addOccasion } = eventSlice.actions;
export default persistedEventReducer;
