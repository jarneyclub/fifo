import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MediaQuery from "react-responsive";
import { AddCourse } from "../AddCourse/AddCourse";

import style from './Title.module.css';
import pic from "../../assets/icons/ProfilePic.png";


const customStyle = {
  title: {
    background: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(50px)",
    display: "flex",
    alignItems: "center",
  },
  toolbar: {
    justifyContent: "space-between",
  },
};

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  return (
    <AppBar elevation={0} position="fixed" sx={customStyle.title}>
      <div className={style.container}>
        <Toolbar disableGutters sx={customStyle.toolbar}>
          <div className={style.main}>
            <MediaQuery maxWidth={768}>
              <h6>FIFO Queue</h6>
            </MediaQuery>

            <MediaQuery minWidth={769}>
              <div className={style.tag}>FIFO Queue</div>
            </MediaQuery>

            <div className={style.group}>
              <h3 style={{ margin: "0px", marginRight: "15px" }}>
                Hi, Rebecca! 👋
              </h3>
              <MediaQuery minWidth={769}>
                <AddCourse />
              </MediaQuery>
            </div>
          </div>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar sx={{ width: 65, height: 65 }} alt="Profile" src={pic} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </div>
      <hr className={style.solid} />
    </AppBar>
  );
};
export default ResponsiveAppBar;