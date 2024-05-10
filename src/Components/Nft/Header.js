import * as React from 'react';
import exodusIcon from '../../assets/images/exodusIcon.svg';
import ourUniverseIcon from '../../assets/images/ourUniverseIcon.svg';
import headerTitle from '../../assets/images/nft-header-text.png';
import { Box, Grid, Typography } from '@mui/material';
import Nav from '../Common/Nav';
import nftHeader from '../../assets/images/nft-header-bg.png';
import nftsIcon from '../../assets/images/nft-logo.svg';
import navAfter from "../../assets/images/nav-about-after.svg";
import navBefore from "../../assets/images/nav-about-before.svg";
import './header.scss';

function Header() {
  return (
    <section className="header">
      <Grid
        container
        justifyContent="center"
        alignContent="space-between"
        spacing={2}
        sx={{
          backgroundImage: `url(${nftHeader})`,
          height: '1070px'
        }}
      >
        <Nav
          selected="NFT"
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
        </Grid>
        <Grid item xs={12} className="show-off">
          <Box>
            <Box className="showOff-container">
              <div>
                <img src={exodusIcon} alt="Exodus icon" />
                <Typography sx={{ display: 'inline-block' }}>EXODUS</Typography>
                <img src={ourUniverseIcon} alt="Universe icon" />
                <Typography sx={{ display: 'inline-block' }}>OUR UNIVERSE</Typography>
                <img src={nftsIcon} alt="Universe icon" />
                <Typography sx={{ display: 'inline-block' }}>NFTS</Typography>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default Header;
