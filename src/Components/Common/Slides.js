import * as React from 'react';
import { Box, Grid } from '@mui/material';
import './slides.scss';
import carousalRight from '../../assets/images/carousal-right.svg';

export default function Slides() {
  return (
    <Grid className="slides" flex sx={{}}>
      <img src={carousalRight} alt="previous" style={{ transform: 'rotate(-90deg)' }} />
      <Box
        sx={{
          '&:after': { backgroundColor: 'rgba(255, 255, 255, 0.4) !important' }
        }}
      />
      <Box
        sx={{
          '&:after': { backgroundColor: '#82ded1 !important' }
        }}
      />
      <Box
        sx={{
          '&:after': { backgroundColor: 'rgba(255, 255, 255, 0.4) !important' }
        }}
      />
      <img src={carousalRight} alt="next" style={{ transform: 'rotate(90deg)' }} />
    </Grid>
  );
}
