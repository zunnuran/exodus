import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import overviewImage1 from '../../assets/images/overview-image-1.png';
import overviewImage2 from '../../assets/images/overview-image-2.png';
import overviewImage3 from '../../assets/images/overview-image-3.png';
import edgeBR from '../../assets/images/cut-edge-br.svg';
import edgeBL from '../../assets/images/cut-edge-bl.svg';
import character1 from '../../assets/images/game-character-1.jpg';
import Headings from '../../Elements/common/Headings';
import chevronsRight from '../../assets/images/chevronsRight.svg';
import Corners from '../../Elements/common/Corners';
import { bounceInDown, fadeInLeft, fadeInRight } from '../../utils';
import Button from '../../Elements/common/Button';
import './main.scss';

function Main() {
  return (
    <Grid component="section" className="overview">
      <Grid
        container
        justifyContent="space-between"
        alignItems="start"
        spacing={0}
        className="main section-padding"
        sx={{ margin: 'auto', paddingBottom: '80px' }}
      >
        <Headings subheading="" heading="GAME" />
        <Headings subheading="" heading="OVERVIEW" arrows />
        <Grid
          item
          md={6}
          className="overview-box animated"
          sx={{
            '&.animated.visible': {
              animation: `${fadeInLeft} 0.5s linear`
            }
          }}
        >
          <Box className="text-box" sx={{ backgroundImage: `url(${edgeBL})` }}>
            <Typography className="title">COLLECT & UPGRADE TONS OF GEARS & WEAPONS</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate leo vitae leo
              tempor, vel fringilla purus eleifend. Praesent vel purus volutpat, consectetur arcu
              ac, volutpat lorem.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          className="overview-box animated"
          sx={{
            '&.animated.visible': {
              animation: `${fadeInRight} 0.5s linear`
            }
          }}
        >
          <Box className="image-box">
            <img src={overviewImage1} alt="" />
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          className="overview-box animated"
          sx={{
            '&.animated.visible': {
              animation: `${fadeInLeft} 0.5s linear`
            }
          }}
        >
          <Box className="image-box">
            <img src={overviewImage2} alt="" />
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          className="overview-box animated"
          sx={{
            '&.animated.visible': {
              animation: `${fadeInRight} 0.5s linear`
            }
          }}
        >
          <Box className="text-box" sx={{ backgroundImage: `url(${edgeBR})` }}>
            <Typography className="title">SEE WHAT NEW GAMES ARE OUT THIS MONTH</Typography>
            <Typography>
              Aenean tincidunt placerat eros id tristique. Cras a velit commodo, egestas diam
              tempus, mattis mi. Nullam facilisis erat sit amet lacus
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          className="overview-box animated"
          sx={{
            '&.animated.visible': {
              animation: `${fadeInLeft} 0.5s linear`
            }
          }}
        >
          <Box className="text-box" sx={{ backgroundImage: `url(${edgeBL})` }}>
            <Typography className="title">CHARACTER GALLERY AND GADGET U CAN HAVE</Typography>
            <Typography>
              condimentum, a gravida ex sollicitudin. Aliquam nec odio nisl. Duis felis est,
              fermentum scelerisque gravida non, pretium vel dolor.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          className="overview-box animated"
          sx={{
            '&.animated.visible': {
              animation: `${fadeInRight} 0.5s linear`
            }
          }}
        >
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
        <Grid
          item
          md={7}
          className="animated"
          sx={{
            '&.animated.visible': {
              animation: `${bounceInDown} 1s linear`
            }
          }}
        >
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
          <Grid
            className="animated"
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&.animated.visible': {
                animation: `${fadeInLeft} 0.5s linear`
              }
            }}
          >
            <div>
              <Typography
                className="subheading animated"
                sx={{
                  '&.animated.visible': {
                    animation: `${fadeInLeft} 0.5s linear`
                  }
                }}
              >
                SOME COOL
              </Typography>
            </div>
            <div style={{ paddingTop: '20px' }}>
              <img src={chevronsRight} alt="" />
            </div>
          </Grid>
          <Typography
            className="heading animated"
            sx={{
              mb: 5,
              '&.animated.visible': {
                animation: `${fadeInLeft} 0.5s linear`
              }
            }}
          >
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
        <Grid
          item
          lg={5}
          md={6}
          sm={12}
          className="character-boxes animated"
          sx={{
            '&.animated.visible': {
              animation: `${fadeInRight} 0.5s linear`
            }
          }}
        >
          <div className="character corners" style={{ backgroundImage: `url(${character1})` }}>
            <Corners />
          </div>
          <div className="character corners" style={{ backgroundImage: `url(${character1})` }}>
            <Corners />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
