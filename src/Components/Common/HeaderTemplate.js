import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './headerTemplate.scss';
import { keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const heroZoom = keyframes`
  0% {
      transform: scale(1);
  }
  50% {
      transform: scale(1.08);
  }
  100% {
      transform: scale(1);
  }
`;

const HeaderTemplate = ({ children, backgroundImage, slides, nav, marqueeContent }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      }, 10000);

      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, []);

  const changeIndex = (i) => {
    setIndex(i);
  };

  return (
    <Grid component="section" className="header" id="header">
      <Grid
        container
        justifyContent="center"
        alignContent="space-between"
        spacing={2}
        sx={{
          minHeight: '100vh',
          paddingTop: '50px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          id="cursor-movement-bg"
          sx={{
            backgroundImage: `url("${slides ? slides[index].background : backgroundImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            content: '""',
            width: '110%',
            height: '110%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            ...(() =>
              slides?.length
                ? {
                    animation: `${heroZoom} 20s ease infinite`,
                    transition: `background-image 3s ease`
                  }
                : {})()
          }}
        />
        {nav}
        {children}
        {slides ? (
          <Grid item xs={12} className="slides">
            <Grid className="slides-boxes" flex>
              {slides.map((s, i) => (
                <Box key={`slide-label-${i}`} className={index === i ? 'box active' : 'box'}>
                  <Typography
                    sx={{
                      transition: 'letter-spacing 0.5s',
                      '&:hover': {
                        letterSpacing: '2px'
                      }
                    }}
                    onClick={() => changeIndex(i)}
                  >
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <Box className="marquee-container">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                maxHeight: '125px',
                textWrap: 'nowrap',
                overflow: 'hidden',
                width: '200vw',
                '& div': {
                  animation: `${marquee} 40s linear infinite`
                },
                '& > div *': {
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
                  '-webkit-text-stroke': '1px rgb(150,150,150)',
                  color: 'transparent',
                  textWrap: 'nowrap'
                }
              }}
            >
              {marqueeContent}
              {marqueeContent}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

HeaderTemplate.propTypes = {
  children: PropTypes.any,
  nav: PropTypes.any,
  backgroundImage: PropTypes.any,
  slides: PropTypes.array,
  marqueeContent: PropTypes.any
};
export default HeaderTemplate;
