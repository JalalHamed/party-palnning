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
    switchIsDone: (
      state,
      action: PayloadAction<{
        eventId: number;
        todoIndex: number;
        isDone: boolean;
      }>
    ) => {
      state.events
        .filter((event) => event.id === action.payload.eventId)[0]
        .todos.filter(
          (_, index) => index === action.payload.todoIndex
        )[0].isDone = action.payload.isDone;
    },
    setTodo: (
      state,
      action: PayloadAction<{ eventId: number; value: string }>
    ) => {
      state.events
        .filter((event) => event.id === action.payload.eventId)[0]
        .todos.push({ title: action.payload.value, isDone: false });
    },
  },
});

const persistedEventsReducer = persistReducer(
  { key: 'events', storage: localforage },
  eventsSlice.reducer
);

export const { addEvent, switchIsDone, setTodo } = eventsSlice.actions;
export default persistedEventsReducer;
