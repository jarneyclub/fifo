//import React, { useState } from 'react';
import * as React from 'react';
import styles from './ClockIn.module.css';
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
} from '@mui/material';

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
  return (
    <div className={styles.Container}>
      <Typography variant="h3">Best way to meet?</Typography>

      <FormGroup>
        <FormControlLabel
          style={{ width: '200px', margin: '5px' }}
          control={<Radio defaultChecked />}
          label="Zoom"
        />
        <FormControlLabel
          style={{ width: '200px', margin: '5px' }}
          control={<Radio />}
          label="In-Person"
        />
        <FormControlLabel
          style={{ width: '200px', margin: '5px' }}
          control={<Radio />}
          label="Hybrid"
        />
        <Button
          style={{ width: '200px', margin: '5px' }}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </FormGroup>
    </div>
  );
}
