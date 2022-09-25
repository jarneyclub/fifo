import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CoursesState {
  instructorCourses: Array<{}>;
  studentCourses: Array<{}>;
}

export interface CourseState {
  id: string;
  code: string;
  name: string;
  role: 'instructor' | 'student';
}

const initialState: Array<CourseState> = [
  {id: 's233', code: 'CS 11', name: 'Intro to Computer Science', role: 'instructor'},
  {id: 's133', code: 'CS 20', name: 'Web Programming', role: 'student'},
]




export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    fetchCourses: (state) => {

    }
  }
})

export const selectCourses = (state: RootState) => state.courses;
export default coursesSlice.reducer;





