import * as React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import bonusBg from '../../assets/images/nft-bonus-bg.png';
import gameCorner from '../../assets/images/game-corner.svg';
import './bonus.scss';

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
          <Box>
            <img src={gameCorner} alt="" style={{ position: 'absolute', top: 0, right: '5px' }} />
            <img
              src={gameCorner}
              alt=""
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '5px',
                transform: 'rotate(180deg)'
              }}
            />
            <div style={{ maxWidth: '430px', textAlign: 'left' }}>
              <Typography className="subheading2" sx={{ mb: 1 }}>
                PRE-ORDER BONUS
              </Typography>
              <Typography className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#8f8f8f',
                  color: 'white',
                  fontFamily: 'sairaCondensed',
                  fontSize: '2em',
                  minWidth: '233px',
                  lineHeight: 1,
                  padding: '5px',
                  background: 'rgba(27, 27, 27, 0.4)'
                }}
              >
                VIEW MORE
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default Bonus;
