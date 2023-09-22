import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { persistReducer } from 'redux-persist';
import { TTheme } from 'types';

const initialState = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<TTheme>) => {
      state.theme = action.payload;
    },
  },
});

const persistedThemeReducer = persistReducer(
  { key: 'theme', storage: localforage },
  themeSlice.reducer
);

export const { changeTheme } = themeSlice.actions;
export default persistedThemeReducer;
