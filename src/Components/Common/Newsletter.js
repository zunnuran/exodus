import * as React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import './newsletter.scss';

export function Newsletter() {
  return (
    <section className="newsletter">
      <Grid container justifyContent="center" alignItems="center" spacing={0} className="content">
        <Grid item md={12} sx={{ minHeight: '245px' }}>
          <Typography className="subheading">SUBSCRIBE OUR</Typography>
          <Grid sx={{ mb: 5, mt: 2 }}>
            <Typography className="heading">NEWSLETTER</Typography>
          </Grid>
          <Box sx={{ mb: 3 }}>
            <TextField
              className="text-field"
              id="outlined-basic"
              label="e-mail"
              variant="outlined"
            />
          </Box>
          <Button variant="outlined" className="button">
            SIGN UP
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}
