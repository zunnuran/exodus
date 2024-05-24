import * as React from 'react';
import exodusIcon from '../../assets/images/exodusIcon.svg';
import ourUniverseIcon from '../../assets/images/ourUniverseIcon.svg';
import { Box, Grid, Typography } from '@mui/material';
import Nav from '../Common/Nav';
import './header.scss';
import aboutHeader from '../../assets/images/games-header.png';
import gamesHeaderImage from '../../assets/images/games-header-image.png';
import chevronsRight from '../../assets/images/chevronsRight.svg';
import navAfter from '../../assets/images/nav-about-after.svg';
import navBefore from '../../assets/images/nav-about-before.svg';
import HeaderTemplate from '../Common/HeaderTemplate';
import { fadeInLeft, fadeInUp } from '../../utils';

function Header() {
  return (
    <HeaderTemplate
      backgroundImage={aboutHeader}
      nav={
        <Nav
          selected="GAMES"
          sx={{
            '.items-container': {
              backgroundColor: 'rgba(0, 0, 0, 0.6) !important',
              '&:after': {
                backgroundImage: `url('${navAfter}') !important`
              },
              '&:before': {
                backgroundImage: `url('${navBefore}') !important`
              }
            }
          }}
        />
      }
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
      <Grid item md={5} sm={5} className="header-image">
        <Box
          sx={{
            animation: `${fadeInLeft} 1s linear`,
            '& img': { maxWidth: '100%' }
          }}
        >
          <img src={gamesHeaderImage} alt="" />
        </Box>
      </Grid>
      <Grid item md={7} sm={12} sx={{ textAlign: 'left' }} className="content">
        <Grid sx={{ display: 'flex', alignItems: 'center', animation: `${fadeInUp} 0.5s linear` }}>
          <Box>
            <Typography className="subheading">OUR</Typography>
          </Box>
          <Box style={{ paddingTop: '20px' }}>
            <img src={chevronsRight} alt="" />
          </Box>
        </Grid>
        <Typography className="heading" sx={{ mb: 5, animation: `${fadeInUp} 0.7s linear` }}>
          GAMES
        </Typography>
        <Box
          className="trophies"
          sx={{
            animation: `${fadeInUp} 1s linear`,
            animationDelay: '0.2s'
          }}
        >
          <Typography className="title">TROPHIES</Typography>
          <Typography>
            <span className="year">2018 - </span>
            <span className="detail">BEST IN EXODUS COMPETITION</span>
          </Typography>
          <Typography>
            <span className="year">2020 - </span>
            <span className="detail">Maecenas tempus, London</span>
          </Typography>
          <Typography>
            <span className="year">2021 - </span>
            <span className="detail">Vanilla Masters in Berlin</span>
          </Typography>
          <Typography>
            <span className="year">2023 - </span>
            <span className="detail">Pro Challengers League</span>
          </Typography>
        </Box>
      </Grid>
    </HeaderTemplate>
  );
}

export default Header;
