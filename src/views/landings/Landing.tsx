import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { Course } from '../../components/courses/Course';
import { CoursesList } from '../../components/courses/ CoursesList';
import styles from '../../views/landings/Landing.module.scss';
import Title from '../../components/title/Title';

export function Landing() {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  const dispatch = useAppDispatch();



  return (
    <div className= {styles.container}>
      <Title />
    
      <CoursesList />


    </div>
  );
}
