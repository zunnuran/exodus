import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import './logos.scss';
import { NumberCounter } from '../../Elements/common/NumberCounter';

export default function Logos() {
  return (
    <section className="category-logos">
      <Grid
        container
        justifyContent="center"
        spacing={0}
        className="logo-grid"
        alignContent="center"
      >
        <Grid item sm={6} lg={3} className="logo-item">
          <Typography className="text-logos">{NumberCounter(135)}</Typography>
          <Typography variant="h5">UNIQUE SHIPS</Typography>
        </Grid>
        <Grid item sm={6} lg={3} className="logo-item">
          <Typography className="text-logos">{NumberCounter(89)}</Typography>
          <Typography variant="h5">FLAGS TAKEN</Typography>
        </Grid>
        <Grid item sm={6} lg={3} className="logo-item">
          <Typography className="text-logos">{NumberCounter(41)}</Typography>
          <Typography variant="h5">DEATHMATCHES</Typography>
        </Grid>
        <Grid item sm={6} lg={3} className="logo-item">
          <Typography className="text-logos">{NumberCounter(17)}</Typography>
          <Typography variant="h5">TOURNAMENTS</Typography>
        </Grid>
      </Grid>
    </section>
  );
}
