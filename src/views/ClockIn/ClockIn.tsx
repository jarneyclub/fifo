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

  function handleHybrid(props: any) {
    if (props === 'Hybrid') {
      setHybridClick(!hybridClick);
    }
    else {
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
        path={"/"}
        title={"TA Clock In - CS 11"}
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
              style={{
                width: "100%",
                padding: "10px 18px",
                border: "1px solid #D9D9D9",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
              control={<Radio defaultChecked />}
              label={<div className={styles.subTitle}>Zoom</div>}
              onClick={() => handleHybrid("Zoom")}
            />
            <FormControlLabel
              value="in-person"
              id="in-person"
              style={{
                width: "100%",
                padding: "10px 18px",
                border: "1px solid #D9D9D9",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
              control={<Radio />}
              label={<div className={styles.subTitle}>In-Person</div>}
              onClick={() => handleHybrid("in-person")}
            />
            <FormControlLabel
              value="hybrid"
              id="hybrid"
              style={{ width: "100%", padding: "10px 18px" }}
              control={<Radio />}
              label={
                <div className={styles.subTitle}>Hybrid</div>
                // <Typography variant="body2" color="black" fontSize="1.5rem">
                //   Hybrid
                // </Typography>
              }
              onClick={() => handleHybrid("Hybrid")}
            />
            {hybridClick ? <EditMeet meetMode="Hybrid" /> : null}
          </RadioGroup>
        </div>
      </Card>

      <Button
        href="/user/instructor/comp40/check-queue"
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "20px",
          padding: "20px",
          fontSize: "1.5rem",
          borderRadius: "15px",
          backgroundColor: "#008CFF",
          textTransform: "capitalize",
        }}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </div>
  );
}
