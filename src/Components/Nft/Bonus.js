import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import bonusBg from '../../assets/images/nft-bonus-bg.png';
import './bonus.scss';
import Corners from '../../Elements/common/Corners';
import Button from '../../Elements/common/Button';
import { fadeInLeft } from '../../utils';

function Bonus() {
  return (
    <section className="bonus">
      <Grid
        container
        justifyContent="center"
        alignContent="flex-end"
        spacing={2}
        sx={{
          backgroundImage: `url(${bonusBg})`,
          minHeight: '1070px',
          backgroundSize: 'cover'
        }}
      >
        <Grid item xs={12} className="bonus-box">
          <Box
            className="corners animated"
            sx={{
              '&.animated.visible': {
                animation: `${fadeInLeft} 1s ease`
              },
              '& img.tr': {
                top: 1,
                right: 6
              },
              '& img.bl': {
                bottom: 10,
                left: 6
              }
            }}
          >
            <Corners tr bl />
            <div style={{ maxWidth: '430px', textAlign: 'left' }}>
              <Typography className="subheading2" sx={{ mb: 1 }}>
                PRE-ORDER BONUS
              </Typography>
              <Typography className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Button>VIEW MORE</Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default Bonus;
