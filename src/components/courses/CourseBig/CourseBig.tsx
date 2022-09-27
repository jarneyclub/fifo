import React, { useState } from 'react';
import { CourseState } from '../coursesSlice';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import style from './CourseBig.module.scss';
import pic from "../../../assets/icons/Book.png"

type CourseProps = {
  courseInfo: CourseState,
  customStyle: {
    fontColor: {},
    backgroundColor: {}
  },
}

export function CourseBig({courseInfo, customStyle}: CourseProps) {
  const { id, code, name, path} = courseInfo;
  return (
    <a href={path} className={style.courseContainer} key={id}>
      <div className={style.gradient}></div>
      <div className={style.bottomContainer}>
        <div className={style.leftContainer}>
          <img className={style.icon} src={pic} alt="book" />
          <div className={style.descriptionContainer}>
            <div className={style.code}>{code}</div>
            <div className={style.name}>{name}</div>
          </div>
        </div>
        <ArrowForwardIosIcon sx={{ color: "#757B93" }} />
      </div>
    </a>
  );
}