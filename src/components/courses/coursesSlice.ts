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
  path: string;
}

const initialState: Array<CourseState> = [
  {id: 's233', code: 'CS 11', name: 'Intro to Computer Science', role: 'instructor', path: '/user/student/comp40/check-queue'},
  {id: 's133', code: 'CS 20', name: 'Web Programming', role: 'student', path: '/user/student/comp40/check-queue'},
  {id: 's133', code: 'CS 160', name: 'Algorithms', role: 'student', path: '/user/student/comp40/check-queue'},
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





