import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCourses } from './landingAPI';

export interface LandingsState {
  instructorCourses: [];
  studentCourses: [];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: LandingsState = {
  instructorCourses: [],
  studentCourses: [],
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchCoursesAsync = createAsyncThunk(
  'landing/fetchCourses',
  async (userID: number) => {
    const response = await fetchCourses(userID);

    return response.data;
  }
);




export const landingsSlice = createSlice({
  name: 'landing',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    startLoading: (state) => {
      state.status = 'loading';
    },
    dataFetched: (state, action) => {
      state.status = 'idle';
      state.instructorCourses = action.payload.instructor;
      state.studentCourses = action.payload.student;
    },
    dataFetchedWithError: (state) => {
      state.status = 'failed';
      state.instructorCourses = [];
      state.studentCourses = [];
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
    
  },
  
});

// actions 
export const { startLoading, dataFetched, dataFetchedWithError} = landingsSlice.actions;

// Selector
// export const getLandingSlice = (state) => state.landing;
// export const selectInstructorCourses = (state: RootState) = state.landing.instructorCourses;

// Reducer
export default landingsSlice.reducer;
