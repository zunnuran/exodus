import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import './logos.scss';

export default function Logos() {
  return (
    <section className="category-logos">
      <Grid container justifyContent="space-around" alignContent="center" spacing={0} className="logo-grid">
        <Grid item sm={12} md={4} className="logo-item">
          <Typography className="text-logos">58</Typography>
          <Typography variant="h5">UNIQUE SHIPS</Typography>
        </Grid>
        <Grid item sm={12} md={4} className="logo-item">
          <Typography className="text-logos">10</Typography>
          <Typography variant="h5">EPIC GAMES AND COUNTING</Typography>
        </Grid>
        <Grid item sm={12} md={4} className="logo-item">
          <Typography className="text-logos">6</Typography>
          <Typography variant="h5">PLANET TYPES</Typography>
        </Grid>
      </Grid>
    </section>
  );
}
