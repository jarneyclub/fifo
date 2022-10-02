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
        title={'TA Clock-In'}
        // color={{ color: 'black'}}
      />

      <Card style={{ width: '50%', padding: '10px' }}>
        <Typography
          style={{ width: '80%', margin: 'auto', padding: '30px' }}
          variant="h3"
        >
          Best way to meet?
        </Typography>

        <FormGroup>
          <FormControlLabel
            // variant={OutlinedInput}
            style={{
              width: '80%',
              margin: 'auto',
              padding: '25px',
            }}
            control={<Radio defaultChecked />}
            label={
              <Typography variant="body2" color="black" fontSize="1.5rem">
                Zoom
              </Typography>
            }
          />
          <FormControlLabel
            style={{ width: '80%', margin: 'auto', padding: '25px' }}
            control={<Radio />}
            label={
              <Typography variant="body2" color="black" fontSize="1.5rem">
                In-Person
              </Typography>
            }
          />
          <FormControlLabel
            style={{ width: '80%', margin: 'auto', padding: '25px' }}
            control={<Radio />}
            label={
              <Typography variant="body2" color="black" fontSize="1.5rem">
                Hybrid
              </Typography>
            }
          />
          <Button
            style={{
              width: '80%',
              margin: 'auto',
              marginTop: '20px',
              padding: '20px',
              fontSize: '1.5rem',
            }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </FormGroup>
      </Card>
    </div>
  );
}
