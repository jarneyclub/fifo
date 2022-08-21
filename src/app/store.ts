import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import coursesReducer from '../components/courses/coursesSlice';
import counterReducer from '../components/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    courses: coursesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
