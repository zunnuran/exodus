import { Grid, Typography } from '@mui/material';
import exAbout from '../../assets/images/exodus-about.png';
import * as React from 'react';
import './about.scss';

export default function About() {
  return (
    <section className="about">
      <Grid container justifyContent="center" alignItems="center" spacing={0}>
        <Grid item md={12}>
          <Typography variant="h3" className="subheading">
            ABOUT
          </Typography>
          <img src={exAbout} alt="" style={{ margin: '15px' }} />
          <Typography className="paragraph">
            Exodus: Our Universe is a hyper-real experience in which players can do virtually
            anything from socializing and free play
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
