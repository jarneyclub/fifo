import React, { useState } from 'react';
import { CourseState } from './coursesSlice';
//added on 9/18/2022
import { BrowserRouter as Router, Link } from 'react-router-dom';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import style from './Course.module.scss';

type CourseProps = {
  courseInfo: CourseState;
  customStyle: {
    fontColor: {};
    backgroundColor: {};
  };
};

export function Course({ courseInfo, customStyle }: CourseProps) {
  const { id, code, name } = courseInfo;
  return (
    <button
      className={style.courseContainer}
      style={customStyle?.backgroundColor}
      key={id}
    >
      <Link
        to="/user/instructor/comp40/ClockIn"
        style={{ textDecoration: 'none' }}
      >
        <div className={style.descriptionContainer}>
          <h4 style={customStyle?.fontColor}>{code}</h4>
          <h6 style={customStyle?.fontColor}>{name}</h6>
        </div>
      </Link>
      <ArrowForwardIosIcon />
    </button>
  );
}
