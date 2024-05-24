import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import './main.scss';
import chevronsRight from '../../../assets/images/chevronsRight.svg';
import mainImage from '../../../assets/images/main-image.png';
import cutEdgeBg from '../../../assets/images/cut-edge-bl.svg';
import tries from '../../../assets/images/about-main-tries.png';
import Button from '../../../Elements/common/Button';
import { fadeInLeft, fadeInRight } from '../../../utils';

function Main() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="start"
      spacing={0}
      className="main section-padding"
    >
      <Grid
        md={5}
        className="main-detail animated"
        sx={{
          '&.animated.visible': { animation: `${fadeInLeft} 0.5s linear` }
        }}
      >
        <img src={chevronsRight} alt="" height={127} />
        <Typography className="subheading" sx={{ mb: 2 }}>
          THE WAY WE WORK IS OF THE GREATEST IMPORTANCE
        </Typography>
        <Button className="button" variant="outlined">
          VIEW MORE
        </Button>
      </Grid>
      <Grid
        md={7}
        className="main-image animated"
        sx={{
          '&.animated.visible': { animation: `${fadeInRight} 0.5s linear` }
        }}
      >
        <div style={{ position: 'relative' }}>
          <img src={cutEdgeBg} className="cut-edge-bg" alt="cut edge background" />
          <img src={mainImage} className="cut-edge-img" alt="Main image" />
        </div>
      </Grid>
      <Grid md={12} sx={{ mt: '50px' }}>
        <img src={tries} alt="" />
      </Grid>
    </Grid>
  );
}

export default Main;
