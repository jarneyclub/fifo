import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { Course } from '../courses/Course';
import { CoursesList } from '../courses/ CoursesList';
// import styles from './Counter.module.css';

export function Landing() {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <header>

      </header>
      
      <CoursesList />


    </div>
  );
}
