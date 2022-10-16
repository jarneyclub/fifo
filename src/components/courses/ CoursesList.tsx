import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, AppThunk } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import MediaQuery from 'react-responsive';

import { CourseState, selectCourses } from './coursesSlice';
import { Course } from './CourseSmall/Course';
import { CourseBig } from './CourseBig/CourseBig';
import { Toolbar } from '@mui/material';

import style from './CoursesList.module.scss';

const instructorCourseStyle = {
  fontColor: { color: '#6A7290' },
  backgroundColor: {
    background: 'rgba(246, 247, 251, 0.85)',
    border: '2px solid #FCFEFF',
    /* Glass & Shadow */
    boxShadow: '0px 4px 43px rgba(57, 61, 90, 0.16)',
    backdropFilter: 'blur(50px)',
    /* Note: backdrop-filter has minimal browser support */
    borderRadius: '15px',
  },
} as const;

const studentCourseStyle = {
  fontColor: { color: 'white' },
  backgroundColor: {
    background:
      'linear-gradient(75.03deg, rgba(44, 100, 240, 0.9) 34.41%, rgba(71, 160, 246, 0.9) 79.58%, rgba(93, 203, 216, 0.9) 112.48%)',
    border: '1px solid #FFFFFF',
    /* Shadow */
    boxShadow: '3px 4px 13px rgba(0, 148, 255, 0.25)',
    borderRadius: '10px',
  },
} as const;

export const CoursesList = () => {
  const courses = useAppSelector(selectCourses);

  // const renderedInstructorCoursesSmall = courses.map((course) => (
  //   <Course courseInfo={course} customStyle={instructorCourseStyle} />
  // ));

  const renderedInstructorCoursesSmall = courses
    .filter((course) => course.role.includes("instructor"))
    .map((filteredCourse) => (
      <Course
        courseInfo={filteredCourse}
        customStyle={instructorCourseStyle}
      />
    ));

  // const renderedStudentCoursesSmall = courses.map((course) => (
  //   <Course courseInfo={course} customStyle={studentCourseStyle} />
  // ));

  const renderedStudentCoursesSmall = courses
    .filter((course) => course.role.includes("student"))
    .map((filteredCourse) => (
      <Course
        courseInfo={filteredCourse}
        customStyle={instructorCourseStyle}
      />
    ));

  const renderedInstructorCoursesBig = courses
    .filter((course) => course.role.includes("instructor"))
    .map((filteredCourse) => (
      <CourseBig
        courseInfo={filteredCourse}
        customStyle={instructorCourseStyle}
      />
    ));

  // const renderedStudentCoursesBig = courses.map((course) => (
  //   <CourseBig courseInfo={course} customStyle={studentCourseStyle} />
  // ));

  const renderedStudentCoursesBig = courses
    .filter((course) => course.role.includes("student"))
    .map((filteredCourse) => (
      <CourseBig
        courseInfo={filteredCourse}
        customStyle={instructorCourseStyle}
      />
    ));

  // const renderedStudentCourses = courses.map((course) => (
  //   <Course courseInfo={course} customStyle={studentCourseStyle} />
  // ));

  return (
    <section className={style.coursesListContainer}>
      <Toolbar disableGutters>
        <div className={style.header2}>Instructor</div>
      </Toolbar>

      <MediaQuery maxWidth={768}>
        <div className={style.coursesContainer}>
          {renderedInstructorCoursesSmall}
        </div>
        <br />
      </MediaQuery>

      <MediaQuery minWidth={769}>
        <div className={style.coursesContainer}>
          {renderedInstructorCoursesBig}
        </div>
        <br />
      </MediaQuery>

      <Toolbar disableGutters>
        <div className={style.header2}>Student</div>
      </Toolbar>

      <MediaQuery maxWidth={768}>
        <div className={style.coursesContainer}>
          {renderedStudentCoursesSmall}
        </div>
      </MediaQuery>

      <MediaQuery minWidth={769}>
        <div className={style.coursesContainer}>
          {renderedStudentCoursesBig}
        </div>
      </MediaQuery>
    </section>
  );
};
