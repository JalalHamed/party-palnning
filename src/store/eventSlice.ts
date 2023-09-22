import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { persistReducer } from 'redux-persist';
import {
  IEvent,
  TAlcohol,
  TEInvite,
  TFoodArrangement,
  TGuestSize,
  TOccasion,
  TStep,
} from 'types';

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
  eInvite: undefined,
  foodArrangement: undefined,
  alcohol: undefined,
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
    setEInvite: (state, action: PayloadAction<TEInvite>) => {
      state.eInvite = action.payload;
    },
    setFoodArrangement: (state, action: PayloadAction<TFoodArrangement>) => {
      state.foodArrangement = action.payload;
    },
    setAlcohol: (state, action: PayloadAction<TAlcohol>) => {
      state.alcohol = action.payload;
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
  setEInvite,
  setFoodArrangement,
  setAlcohol,
} = eventSlice.actions;
export default persistedEventReducer;
