//import React, { useState } from 'react';
import * as React from 'react';
import { useState } from 'react';
import styles from './ClockIn.module.css';
import { EditMeet } from '../../components/EditMeet/EditMeet';
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  Container,
  Grid,
  makeStyles,
  Card,
  Tooltip,
  IconButton,
  Avatar,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
} from '@mui/material';
import { HeaderWBackBtn } from '../../components/HeaderWBackBtn/HeaderWBackBtn';

// const useStyles = makeStyles((theme) => ({
//   marginAutoContainer: {
//     width: 500,
//     height: 80,
//     display: 'flex',
//     backgroundColor: 'gold',
//   },
//   marginAutoItem: {
//     margin: 'auto',
//   },
//   alignItemsAndJustifyContent: {
//     width: 500,
//     height: 80,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'pink',
//   },
// }));

export function ClockIn() {
  const [hybridClick, setHybridClick] = useState(false);
  const [zoomClick, setZoomClick] = useState(false);
  const [inPersonClick, setInPersonClick] = useState(false);

  const labelStyle1 = {
    width: '100%',
    padding: '10px 18px',
    border: '1px solid #D9D9D9',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  const labelStyle2 = {
    width: '100%',
    padding: '10px 18px',
    border: '1px solid #008CFF',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  function handleChange(props: any) {
    if (props === 'hybrid') {
      console.log('here');
      setHybridClick(!hybridClick);
      setZoomClick(false);
      setInPersonClick(false);
      // labelStyle = labelStyle1;
    } else if (props === 'zoom') {
      setZoomClick(!zoomClick);
      setHybridClick(false);
      setInPersonClick(false);
    } else {
      setInPersonClick(!inPersonClick);
      setZoomClick(false);
      setHybridClick(false);
    }
  }

  return (
    <div className={styles.Container}>
      {/* <AppBar position="fixed">
        <Container maxWidth="lg" style={{ marginBottom: '20px' }}>
          <Toolbar disableGutters>
            <HeaderWBackBtn></HeaderWBackBtn>
            <Typography style={{ width: '40%', margin: 'auto' }} variant="h4">
              TA Clock-In
            </Typography>
          </Toolbar>
        </Container>
      </AppBar> */}

      <HeaderWBackBtn
        path={'/'}
        title={'TA Clock In - CS 11'}
        // color={{ color: 'black'}}
      />

      <Card className={styles.card}>
        <div className={styles.content}>
          <div className={styles.h3}> Best way to meet?</div>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="zoom"
              id="zoom"
              style={zoomClick ? labelStyle2 : labelStyle1}
              control={<Radio defaultChecked />}
              label={
                <div
                  className={zoomClick ? styles.subTitleClick : styles.subTitle}
                >
                  Zoom
                </div>
              }
              onClick={() => handleChange('zoom')}
            />
            <FormControlLabel
              value="in-person"
              id="in-person"
              style={inPersonClick ? labelStyle2 : labelStyle1}
              control={<Radio />}
              label={
                <div
                  className={
                    inPersonClick ? styles.subTitleClick : styles.subTitle
                  }
                >
                  In-Person
                </div>
              }
              onClick={() => handleChange('in-person')}
            />
            <FormControlLabel
              value="hybrid"
              id="hybrid"
              style={hybridClick ? labelStyle2 : labelStyle1}
              control={<Radio />}
              label={
                <div
                  className={
                    hybridClick ? styles.subTitleClick : styles.subTitle
                  }
                >
                  Hybrid
                </div>
                // <Typography variant="body2" color="black" fontSize="1.5rem">
                //   Hybrid
                // </Typography>
              }
              onClick={() => handleChange('hybrid')}
            />

            {hybridClick ? (
              <div>
                <EditMeet meetMode="Room 101, JCC" />
                <EditMeet meetMode="Default OH Zoom" />
              </div>
            ) : null}
          </RadioGroup>
        </div>
      </Card>

      <Button
        href="/user/instructor/comp40/check-queue"
        style={{
          width: '50%',
          margin: 'auto',
          marginTop: '20px',
          padding: '20px',
          fontSize: '1.5rem',
          borderRadius: '15px',
          backgroundColor: '#008CFF',
          textTransform: 'capitalize',
        }}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </div>
  );
}
