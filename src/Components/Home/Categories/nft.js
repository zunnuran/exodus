import * as React from 'react';
import { Grid } from '@mui/material';
import gamePlayBG from '../../../assets/images/gameplay-background.png';
import metaverseBG from '../../../assets/images/metaverse-background.png';
import nftsBG from '../../../assets/images/nfts-background.png';
import gameplayLogo from '../../../assets/images/gameplay-logo.png';
import metaverseLogo from '../../../assets/images/metaverse-logo.png';
import nftsLogo from '../../../assets/images/nfts-logo.png';
import glowLight from '../../../assets/images/glowLight.png';
import { fadeInUp } from 'react-animations';
import { keyframes } from '@emotion/react';
import './nft.scss';

// const bouncein = keyframes`${bounceInUp}`
const fadein = keyframes`${fadeInUp}`;

function Nft() {
  return (
    <section className="nfts">
      <Grid
        container
        justifyContent="center"
        spacing={0}
        className="nft-row"
        sx={{
          boxShadow: '0 0 40px #000',
          '& img.animated.visible': {
            animation: `${fadein} 2s`
          }
        }}
      >
        <Grid item sm sx={{}}>
          <Grid
            className="nft-box"
            sx={{
              background: `url(${gamePlayBG})`,
              '&:after': {
                content: '""',
                backgroundImage: `url(${glowLight})`
              }
            }}
          >
            <img
              className="animated"
              src={gameplayLogo}
              alt="gameplay Logo"
              style={{ transform: 'skew(10deg)' }}
            />
          </Grid>
        </Grid>
        <Grid item sm sx={{}}>
          <Grid
            className="nft-box"
            sx={{
              background: `url(${metaverseBG})`,
              '&:before': {
                backgroundImage: `url(${glowLight})`
              }
            }}
          >
            <img
              className="animated"
              src={metaverseLogo}
              alt="metaverse Logo"
              style={{ transform: 'skew(10deg)' }}
            />
          </Grid>
        </Grid>
        <Grid item sm sx={{}}>
          <Grid
            className="nft-box last"
            sx={{
              background: `url(${nftsBG})`,
              '&:after': {
                backgroundImage: `url(${glowLight})`
              }
            }}
          >
            <img className="animated" src={nftsLogo} alt="nfts Logo" />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default Nft;
