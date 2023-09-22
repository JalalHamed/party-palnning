import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { persistReducer } from 'redux-persist';
import { IEvent, TGuestSize, TOccasion, TStep } from 'types';

const initialState: IEvent = {
  step: 'occasion',
  occasion: undefined,
  guestSize: undefined,
  form: {
    eventName: undefined,
    date: undefined,
    time: undefined,
    budget: undefined,
  },
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<TStep>) => {
      state.step = action.payload;
    },
    setOccasion: (state, action: PayloadAction<TOccasion>) => {
      state.occasion = action.payload;
    },
    setGuestSize: (state, action: PayloadAction<TGuestSize>) => {
      state.guestSize = action.payload;
    },
    setEventName: (state, action: PayloadAction<string>) => {
      state.form.eventName = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.form.date = action.payload;
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.form.time = action.payload;
    },
    setBudget: (state, action: PayloadAction<number>) => {
      state.form.budget = action.payload;
    },
  },
});

const persistedEventReducer = persistReducer(
  { key: 'event', storage: localforage },
  eventSlice.reducer
);

export const {
  setStep,
  setOccasion,
  setGuestSize,
  setEventName,
  setDate,
  setTime,
  setBudget,
} = eventSlice.actions;
export default persistedEventReducer;
