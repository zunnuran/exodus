import * as React from 'react';
import exodusIcon from '../../assets/images/exodusIcon.svg';
import exodusIcon2 from '../../assets/images/exodusIcon2.svg';
import ourUniverseIcon from '../../assets/images/ourUniverseIcon.svg';
import { Box, Grid, Typography } from '@mui/material';
import Nav from '../Common/Nav';
import './header.scss';
import aboutHeader from '../../assets/images/games-header.png';
import gamesHeaderImage from '../../assets/images/games-header-image.png';
import chevronsRight from '../../assets/images/chevronsRight.svg';
import navAfter from "../../assets/images/nav-about-after.svg";
import navBefore from "../../assets/images/nav-about-before.svg";

function Header() {
  return (
    <section className="header">
      <Grid
        container
        justifyContent="center"
        alignContent="space-between"
        spacing={2}
        sx={{
          backgroundImage: `url(${aboutHeader})`,
          height: '1066px',
        }}
      >
        <Nav
          selected="HOME"
          sx={{
            '.items-container': {
              backgroundColor: "rgba(0, 0, 0, 0.6) !important",
              '&:after': {
                backgroundImage: `url('${navAfter}') !important`
              },
              '&:before': {
                backgroundImage: `url('${navBefore}') !important`
              },
            }
          }}
        />
        <Grid item md={5} sm={5} className="header-image">
          <Box>
            <img src={gamesHeaderImage} alt="" />
          </Box>
        </Grid>
        <Grid item md={7} sm={12} sx={{ textAlign: 'left' }} className="content">
          <Grid sx={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Typography className="subheading">OUR</Typography>
            </div>
            <div style={{ paddingTop: '20px' }}>
              <img src={chevronsRight} alt="" />
            </div>
          </Grid>
          <Typography className="heading" sx={{ mb: 5 }}>
            GAMES
          </Typography>
          <Box className="trophies">
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

        <Grid item xs={12} className="showOff">
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
