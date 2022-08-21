import React, { useState } from 'react';
import { CourseState } from './coursesSlice';


import style from './Course.module.scss';

type CourseProps = {
  courseInfo: CourseState,
}



export function Course({courseInfo}: CourseProps) {
  const { id, code, name } = courseInfo;
  return (
    <button className={ style.courseContainer } key={id}>
      <div>
        <h3>{ code }</h3>
        <h4>{ name }</h4>
      </div>
      
    </button>
  )
}