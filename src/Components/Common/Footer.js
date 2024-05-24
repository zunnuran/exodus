import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import instaIcon from '../../assets/images/insta-icon.png';
import twitterIcon from '../../assets/images/twitter-icon.png';
import fbIcon from '../../assets/images/fb-icon.png';
import youtubeIcon from '../../assets/images/youtube-icon.png';
import discordIcon from '../../assets/images/discord-icon.png';
import './footer.scss';
import { fadeInUp } from '../../utils';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Grid component="footer">
      <div className="bg" />
      <Grid container justifyContent="center" alignItems="center" className="container1">
        <Grid item md={12}>
          <Typography
            className="exodus animated"
            sx={{
              transition: 'width 5s linear',
              '&.animated.visible': {
                width: '100%',
                transition: 'width 2s linear'
              }
            }}
          >
            EXODUS
          </Typography>
          <Box
            className="links animated"
            sx={{
              '&.animated.visible': {
                animation: `${fadeInUp} 0.8s linear`
              }
            }}
          >
            <Link to="/">HOME</Link>
            <Link to="/nft">NFT</Link>
            <Link to="/games">GAMES</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/">WHITE PAPER</Link>
            <Link to="/">NEWS</Link>
          </Box>
          <Box
            className="animated"
            sx={{
              '&.animated.visible': {
                animation: `${fadeInUp} 1s linear`
              }
            }}
          >
            <a href="#">
              <img src={instaIcon} alt="" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="#">
              <img src={fbIcon} alt="" />
            </a>
            <a href="#">
              <img src={youtubeIcon} alt="" />
            </a>
            <a href="#">
              <img src={discordIcon} alt="" />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
