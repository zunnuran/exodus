import * as React from 'react';
import banner1 from '../../assets/images/banner.jpg';
import banner2 from '../../assets/images/robot-game.jpg';
import banner3 from '../../assets/images/gaming-wallpaper.jpg';
import exodusIcon from '../../assets/images/exodusIcon.svg';
import ourUniverseIcon from '../../assets/images/ourUniverseIcon.svg';
import { Box, Grid, Typography } from '@mui/material';
import { fadeInUp } from '../../utils';
import Nav from '../Common/Nav';
import './header.scss';
import HeaderTemplate from '../Common/HeaderTemplate';

function Header() {
  return (
    <HeaderTemplate
      slides={[
        {
          background: banner1,
          label: 'NEMESIS AWEKING'
        },
        {
          background: banner2,
          label: 'GOMORRAH'
        },
        {
          background: banner3,
          label: 'THE EXODUS UNIVERSE'
        }
      ]}
      nav={<Nav selected="HOME" />}
      marqueeContent={
        <Grid sx={{ display: 'inline-block', m: 0, width: '100vw', textAlign: 'center' }}>
          <img src={exodusIcon} alt="Exodus icon" />
          <Typography sx={{ display: 'inline-block' }}>EXODUS</Typography>
          <img src={ourUniverseIcon} alt="Universe icon" />
          <Typography sx={{ display: 'inline-block' }}>OUR UNIVERSE</Typography>
          <img src={exodusIcon} alt="Exodus icon" />
          <Typography sx={{ display: 'inline-block' }}>EXODUS</Typography>
        </Grid>
      }
    >
      <Grid item xs={12} className="taglines">
        <Box
          sx={{
            animation: `${fadeInUp} 0.5s linear`,
            '& .home-exodus': {
              transition: `transform 0.5s`
            },
            '& .home-exodus:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          <Typography className="home-exodus">EXODUS</Typography>
        </Box>
        <Box
          className="universe"
          sx={{
            animation: `${fadeInUp} 0.5s linear`,
            transition: 'letter-spacing 0.5s',
            '&:hover': {
              letterSpacing: '3px'
            }
          }}
        >
          OUR UNIVERSE
        </Box>
      </Grid>
    </HeaderTemplate>
  );
}

export default Header;
