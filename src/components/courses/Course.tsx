import React, { useState } from 'react';
import { CourseState } from './coursesSlice';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import style from './Course.module.scss';

type CourseProps = {
  courseInfo: CourseState,
  customStyle: {
    fontColor: {},
    backgroundColor: {}
  },
}



export function Course({courseInfo, customStyle}: CourseProps) {
  const { id, code, name } = courseInfo;
  return (
    <button className={ style.courseContainer } style = {customStyle?.backgroundColor} key={id}>
      <div className={ style.descriptionContainer }>
        <h4 style={customStyle?.fontColor}>{ code }</h4>
        <h6 style={customStyle?.fontColor}>{ name }</h6>
      </div>
      <ArrowForwardIosIcon />
      
    </button>
  )
}