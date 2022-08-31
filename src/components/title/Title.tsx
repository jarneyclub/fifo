import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import style from './Title.module.css'


const customStyle = {
  title: {
    background: "rgba(255, 255, 255, 0.5)",
    border: "1.5px solid #FFFFFF",
    backdropFilter: "blur(50px)",
  },
  toolbar: {
    justifyContent: "space-between"
  }
  
}

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  return (
    <AppBar position="fixed" sx={customStyle.title}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={customStyle.toolbar}>
          <h3>My Courses</h3>
          <Tooltip title="Add Course">
            <a href="/user/enrollment">
              <button className={style.button}>+ Add</button>
            </a>
          </Tooltip>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;