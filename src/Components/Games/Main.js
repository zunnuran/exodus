import * as React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import overviewImage1 from '../../assets/images/overview-image-1.png';
import overviewImage2 from '../../assets/images/overview-image-2.png';
import overviewImage3 from '../../assets/images/overview-image-3.png';
import edgeBR from '../../assets/images/cut-edge-br.svg';
import edgeBL from '../../assets/images/cut-edge-bl.svg';
import character1 from '../../assets/images/game-character-1.jpg';
import Headings from '../../Elements/common/Headings';
import './main.scss';
import chevronsRight from '../../assets/images/chevronsRight.svg';
import gameCorner from '../../assets/images/game-corner.svg';

function Main() {
  return (
    <Grid component="section" className="overview">
      <Grid
        container
        justifyContent="space-between"
        alignItems="start"
        spacing={0}
        className="main section-padding"
        sx={{ maxWidth: '1040px', margin: 'auto', paddingBottom: '80px' }}
      >
        <Headings subheading="" heading="GAME" />
        <Headings subheading="" heading="OVERVIEW" arrows />
        <Grid item sm={6} className="overview-box">
          <Box className="text-box" sx={{ backgroundImage: `url(${edgeBL})` }}>
            <Typography>COLLECT & UPGRADE TONS OF GEARS & WEAPONS</Typography>
          </Box>
        </Grid>
        <Grid item sm={6} className="overview-box">
          <Box className="image-box">
            <img src={overviewImage1} alt="" />
          </Box>
        </Grid>
        <Grid item sm={6} className="overview-box">
          <Box className="image-box">
            <img src={overviewImage2} alt="" />
          </Box>
        </Grid>
        <Grid item sm={6} className="overview-box">
          <Box className="text-box" sx={{ backgroundImage: `url(${edgeBR})` }}>
            <Typography>SEE WHAT NEW GAMES ARE OUT THIS MONTH</Typography>
          </Box>
        </Grid>
        <Grid item sm={6} className="overview-box">
          <Box className="text-box" sx={{ backgroundImage: `url(${edgeBL})` }}>
            <Typography>CHARACTER GALLERY AND GADGET U CAN HAVE</Typography>
          </Box>
        </Grid>
        <Grid item md={6} className="overview-box">
          <Box className="image-box">
            <img src={overviewImage3} alt="" />
          </Box>
        </Grid>
      </Grid>
      <div className="bars" />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={0}
        className="characters section-padding"
        sx={{ pt: '40px', pb: '40px', mb: '-20px' }}
      >
        <Grid item md={7}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'bebasNeue',
              fontStyle: 'italic',
              fontWeight: 'bold',
              fontSize: '35px',
              mb: 0,
              color: '#5a9ffa'
            }}
          >
            JEFF WEISE
          </Typography>
          <Typography className="tagline" sx={{ fontFamily: 'bebasNeue', fontSize: '20px' }}>
            CREATIVE DIRECTOR
          </Typography>
        </Grid>
        <Grid item md={5} />
        <Grid item lg={7} md={6} sm={12} sx={{ textAlign: 'left' }}>
          <Grid sx={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Typography className="subheading">SOME COOL</Typography>
            </div>
            <div style={{ paddingTop: '20px' }}>
              <img src={chevronsRight} alt="" />
            </div>
          </Grid>
          <Typography className="heading" sx={{ mb: 5 }}>
            CHARACTERS
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
        </Grid>
        <Grid item lg={5} md={6} sm={12} className="character-boxes">
          <div className="character" style={{ backgroundImage: `url(${character1})` }}>
            <img src={gameCorner} alt="" className="tl" />

            <img src={gameCorner} alt="" className="tr" />

            <img src={gameCorner} alt="" className="bl" />

            <img src={gameCorner} alt="" className="br" />
          </div>
          <div className="character" style={{ backgroundImage: `url(${character1})` }}>
            <img src={gameCorner} alt="" className="tl" />

            <img src={gameCorner} alt="" className="tr" />

            <img src={gameCorner} alt="" className="bl" />

            <img src={gameCorner} alt="" className="br" />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
