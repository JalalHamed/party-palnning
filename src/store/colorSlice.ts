import { createSlice } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { persistReducer } from 'redux-persist';
import { IColorSlice } from 'types';

const initialState: IColorSlice = {
  anniversary: '#FF9A98',
  birthday: '#D898FF',
  dinner: '#98FF9C',
  'meet-up': '#76A9FF',
  other: '#FFED9B',
  small: '#D898FF',
  medium: '#FF9A98',
  large: '#98FF9C',
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {},
});

const persistedColorReducer = persistReducer(
  { key: 'color', storage: localforage },
  colorSlice.reducer
);

export default persistedColorReducer;
