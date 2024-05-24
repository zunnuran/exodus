import * as React from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import Headings from '../../Elements/common/Headings';
import Corners from '../../Elements/common/Corners';
import './games.scss';
import Slider from 'react-slick';

export function Games() {
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const md = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  const lg = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));

  return (
    <section className="games">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={0}
        className="heading-container"
      >
        <Grid item md={12}>
          <Headings heading="GAMES" subheading="OUR" arrows />
        </Grid>
      </Grid>
      <Grid container spacing={4} className="slider-container">
        <Grid item md={12} sx={{ pl: '14px', width: '100%' }}>
          <Slider
            autoplay
            autoplaySpeed={4000}
            pauseOnHover={false}
            dots={false}
            infinite={true}
            speed={1000}
            slidesToShow={sm ? 1 : md ? 2 : lg ? 3 : 4}
            slidesToScroll={1}
          >
            <div className="game game1 corners">
              <Corners />
              <div className="text-box">
                <div>
                  <Typography>VIDEO GAME</Typography>
                  <Typography className="game-title">THE OMINOUS</Typography>
                </div>
              </div>
            </div>
            <div className="game game2 corners">
              <Corners />
              <div className="text-box">
                <div>
                  <Typography>VIDEO GAME</Typography>
                  <Typography className="game-title">THE OMINOUS</Typography>
                </div>
              </div>
            </div>
            <div className="game game3 corners">
              <Corners />
              <div className="text-box">
                <div>
                  <Typography>VIDEO GAME</Typography>
                  <Typography className="game-title">THE OMINOUS</Typography>
                </div>
              </div>
            </div>
            <div className="game game4 corners">
              <Corners />
              <div className="text-box">
                <div>
                  <Typography>VIDEO GAME</Typography>
                  <Typography className="game-title">THE OMINOUS</Typography>
                </div>
              </div>
            </div>
          </Slider>
        </Grid>
      </Grid>
    </section>
  );
}
