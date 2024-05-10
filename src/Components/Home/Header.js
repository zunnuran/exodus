import * as React from 'react';
import banner from '../../assets/images/banner.jpg';
import exodusIcon from '../../assets/images/exodusIcon.svg';
import exodusIcon2 from '../../assets/images/exodusIcon2.svg';
import ourUniverseIcon from '../../assets/images/ourUniverseIcon.svg';
import exodus from '../../assets/images/exodus.png';
import { Box, Grid, Typography } from '@mui/material';
import Nav from '../Common/Nav';
import './header.scss';

function Header() {
  return (
    <section className="header">
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{
          backgroundImage: `url(${banner})`,
          paddingTop: '70px'
        }}
      >
        <Nav selected="HOME" />
        <Grid item xs={12} className="taglines">
          <img style={{ marginTop: '125px', width: '80%' }} alt="EXODUS" src={exodus} />
          <Box
            className="universe"
            sx={{}}
          >
            OUR UNIVERSE
          </Box>
        </Grid>
        <Grid item xs={12} className="slides">
          <Grid
            className="slides-box"
            flex>
            <Box
              sx={{
                '&:after': { backgroundColor: '#82ded1 !important' }
              }}
            >
              <Typography sx={{ color: '#FFF', opacity: '40%' }}>NEMESIS AWEKING</Typography>
            </Box>
            <Box
              sx={{
                '&:after': { backgroundColor: '#82ded1 !important' }
              }}
            >
              <Typography sx={{ color: '#FFF', opacity: '40%' }}>GOMORRAH</Typography>
            </Box>
            <Box
              sx={{
                '&:after': { backgroundColor: '#82ded1 !important' }
              }}
            >
              <Typography sx={{ color: '#82ded1' }}>THE EXODUS UNIVERSE</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} className="shoOff">
          <Box className="showOff-container">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                maxHeight: '125px',
                textWrap: 'nowrap',
                overflow: 'hidden',
                '& *': {
                  margin: '0 15px'
                },
                '& p': {
                  fontFamily: 'lemonmilkBold',
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  letterSpacing: '5px',
                  lineHeight: 1.8,
                  textTransform: 'uppercase',
                  textShadow: '0px 11px 32px rgba(0, 0, 0, 0.46)',
                  '-webkit-text-stroke': '1px rgb(100,100,100)',
                  color: 'transparent',
                  textWrap: 'nowrap'
                }
              }}
            >
              <img src={exodusIcon} alt="Exodus icon" />
              <Typography sx={{ display: 'inline-block' }}>EXODUS</Typography>
              <img src={ourUniverseIcon} alt="Universe icon" />
              <Typography sx={{ display: 'inline-block' }}>OUR UNIVERSE</Typography>
              <img src={exodusIcon2} alt="Exodus icon" />
              <Typography sx={{ display: 'inline-block' }}>EXODUS</Typography>
              <img src={ourUniverseIcon} alt="Universe icon" />
              <Typography sx={{ display: 'inline-block' }}>OUR UNIVERSE</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default Header;
