import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { persistReducer } from 'redux-persist';
import { IEvent, TGuestSize, TOccasion, TSteps } from 'types';

const initialState: IEvent = {
  step: 'occasion',
  occasion: undefined,
  guestSize: undefined,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<TSteps>) => {
      state.step = action.payload;
    },
    setOccasion: (state, action: PayloadAction<TOccasion>) => {
      state.occasion = action.payload;
    },
    setGuestSize: (state, action: PayloadAction<TGuestSize>) => {
      state.guestSize = action.payload;
    },
  },
});

const persistedEventReducer = persistReducer(
  { key: 'event', storage: localforage },
  eventSlice.reducer
);

export const { setStep, setOccasion, setGuestSize } = eventSlice.actions;
export default persistedEventReducer;
