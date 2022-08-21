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
  {id: 's233', code: 'Comp 40', name: 'Machine Structure & Programming', role: 'student'},
  {id: 's133', code: 'Comp 15', name: 'Data Structures', role: 'instructor'},
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





