import * as React from 'react';
import exodusIcon from '../../assets/images/exodusIcon.svg';
import ourUniverseIcon from '../../assets/images/ourUniverseIcon.svg';
import { Box, Grid, Typography } from '@mui/material';
import Nav from '../Common/Nav';
import nftHeader from '../../assets/images/nft-header-bg.png';
import nftsIcon from '../../assets/images/nft-logo.svg';
import navAfter from '../../assets/images/nav-about-after.svg';
import navBefore from '../../assets/images/nav-about-before.svg';
import headerVid from '../../assets/videos/nft-card-animation.mp4';
import './header.scss';
import HeaderTemplate from '../Common/HeaderTemplate';
import { fadeInUp } from '../../utils';

function Header() {
  return (
    <HeaderTemplate
      backgroundImage={nftHeader}
      video={headerVid}
      nav={
        <Nav
          selected="NFT"
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
        <div>
          <img src={exodusIcon} alt="Exodus icon" />
          <Typography sx={{ display: 'inline-block' }}>EXODUS</Typography>
          <img src={ourUniverseIcon} alt="Universe icon" />
          <Typography sx={{ display: 'inline-block' }}>OUR UNIVERSE</Typography>
          <img src={nftsIcon} alt="Universe icon" />
          <Typography sx={{ display: 'inline-block' }}>NFTS</Typography>
        </div>
      }
    >
      <Grid item xs={12} className="taglines">
        <Box
          sx={{
            animation: `${fadeInUp} 0.5s linear`,
            '& .hero-title': {
              transition: `transform 0.5s`
            },
            '& .hero-title:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          <Typography className="hero-title">NFTS</Typography>
        </Box>
      </Grid>
    </HeaderTemplate>
  );
}

export default Header;
