import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { CoursesList } from '../../components/courses/ CoursesList';
import styles from '../../views/landings/Landing.module.scss';
import Title from '../../components/title/Title';
import {AddCourse} from "../../components/AddCourse/AddCourse";
import MediaQuery from "react-responsive";

export function Landing() {
  // const instructorCourses = useAppSelector(selectInstructorCourses);
  const dispatch = useAppDispatch();



  return (
    <div className={styles.container}>
      <Title />

      <CoursesList />

      <MediaQuery maxWidth={768}>
        <div className={styles.AddContainer}>
          <AddCourse/>
        </div>
      </MediaQuery>
    </div>
  );
}
