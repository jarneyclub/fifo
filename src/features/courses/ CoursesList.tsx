import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, AppThunk } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';


import { CourseState, selectCourses } from './coursesSlice'
import { Course } from './Course';
import style from './CoursesList.module.scss';


export const CoursesList = () => {
  const courses = useAppSelector(selectCourses)

  const renderedCourses = courses.map(course => (
    <Course courseInfo = { course } />
  ))


  return (
    <section className={ style.coursesListContainer}>
      <h2>Host OH</h2>
      {renderedCourses}
      <h2>Join QUEUE</h2>
      {renderedCourses}
    </section>
  )
}