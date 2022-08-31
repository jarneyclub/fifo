import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, AppThunk } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';


import { CourseState, selectCourses } from './coursesSlice'
import { Course } from './Course';
import style from './CoursesList.module.scss';
import { Toolbar } from '@mui/material';

const instructorCourseStyle = {    
  fontColor: {color: "#6A7290"},
  backgroundColor: {
    background: "rgba(246, 247, 251, 0.85)",
    border: "2px solid #FCFEFF",
    /* Glass & Shadow */
    boxShadow: "0px 4px 43px rgba(57, 61, 90, 0.16)",
    backdropFilter: "blur(50px)",
    /* Note: backdrop-filter has minimal browser support */
    borderRadius: "15px",
  },
} as const;

const studentCourseStyle = {    
  fontColor: {color: "white"},
  backgroundColor: {
    background: "linear-gradient(75.03deg, rgba(44, 100, 240, 0.9) 34.41%, rgba(71, 160, 246, 0.9) 79.58%, rgba(93, 203, 216, 0.9) 112.48%)",
    border: "1px solid #FFFFFF",
    /* Shadow */
    boxShadow: "3px 4px 13px rgba(0, 148, 255, 0.25)",
    borderRadius: "10px",
  }
} as const;

export const CoursesList = () => {
  const courses = useAppSelector(selectCourses)

  const renderedInstructorCourses = courses.map(course => (
    <Course courseInfo = { course } customStyle = { instructorCourseStyle } />
  ))

  const renderedStudentCourses = courses.map(course => (
    <Course courseInfo = { course } customStyle = { studentCourseStyle } />
  ))


  return (
    <section className={style.coursesListContainer}>
      <Toolbar disableGutters>
        <h5>Host OH </h5>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h5 style={{ color: "#008CFF" }}>TA</h5>
      </Toolbar>

      <div className={style.coursesContainer}>{renderedInstructorCourses}</div>
      <br />
      <Toolbar disableGutters>
        <a href="/user/student/comp40/check-queue">
          <h5>Join Queue </h5>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h5 style={{ color: "#008CFF" }}>Student</h5>
      </Toolbar>

      <div className={style.coursesContainer}>{renderedStudentCourses}</div>
    </section>
  );
}


