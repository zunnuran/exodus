import * as React from 'react';
import navAfter from '../../assets/images/nav-about-after.svg';
import navBefore from '../../assets/images/nav-about-before.svg';
import exodusIcon from '../../assets/images/exodusIcon.svg';
import ourUniverseIcon from '../../assets/images/ourUniverseIcon.svg';
import chrvrons from '../../assets/images/chevronsDown.svg';
import { Box, Grid, Typography } from '@mui/material';
import Nav from '../Common/Nav';
import './header.scss';
import aboutHeader from '../../assets/images/about-header-bg.png';
import HeaderTemplate from '../Common/HeaderTemplate';
import { fadeInUp } from '../../utils';

function Header() {
  return (
    <HeaderTemplate
      backgroundImage={aboutHeader}
      nav={
        <Nav
          selected="ABOUT"
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
          <Typography className="hero-title">ABOUT US</Typography>
        </Box>
        <Typography className="paragraph">
          Exodus: Our Universe is a hyper-real experience in which players can do virtually anything
          from socializing and free play
        </Typography>
      </Grid>
      <div>
        <img src={chrvrons} alt="" />
      </div>
    </HeaderTemplate>
  );
}

export default Header;
