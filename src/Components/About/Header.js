import * as React from 'react';
import navAfter from '../../assets/images/nav-about-after.svg';
import navBefore from '../../assets/images/nav-about-before.svg';
import exodusIcon from '../../assets/images/exodusIcon.svg';
import exodusIcon2 from '../../assets/images/exodusIcon2.svg';
import ourUniverseIcon from '../../assets/images/ourUniverseIcon.svg';
import headerTitle from '../../assets/images/about-header-title.png';
import chrvrons from '../../assets/images/chevronsDown.svg';
import { Box, Grid, Typography } from '@mui/material';
import Nav from '../Common/Nav';
import './header.scss';
import aboutHeader from '../../assets/images/about-header-bg.png';

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
        <Grid item xs={12} className="taglines">
          <img
            style={{
              margin: 'auto',
              marginTop: '125px',
              width: '80%',
              maxWidth: '675px',
              display: 'block'
            }}
            alt="ABOUT"
            src={headerTitle}
          />
          <Typography className="paragraph">
            Exodus: Our Universe is a hyper-real experience in which players can do virtually
            anything from socializing and free play
          </Typography>
        </Grid>
        <Grid item xs={12} className="shoOff">
          <div>
            <img src={chrvrons} alt="" />
          </div>
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
