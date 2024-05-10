import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import instaIcon from '../../assets/images/insta-icon.png';
import twitterIcon from '../../assets/images/twitter-icon.png';
import fbIcon from '../../assets/images/fb-icon.png';
import youtubeIcon from '../../assets/images/youtube-icon.png';
import discordIcon from '../../assets/images/discord-icon.png';
import './footer.scss';

export default function Footer() {
  return (
    <Grid component="footer">
      <Grid container justifyContent="center" alignItems="center" className="container1">
        <Grid item md={12}>
          <Typography className="exodus">EXODUS</Typography>
          <Box className="links">
            <a href="#">HOME</a>
            <a href="#">NFT</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">WHITE PAPER</a>
            <a href="#">NEWS</a>
          </Box>
          <Box>
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
      <Grid container justifyContent="center" alignItems="center" className="container2"></Grid>
    </Grid>
  );
}
