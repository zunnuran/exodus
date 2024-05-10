import * as React from 'react';
import { Grid } from '@mui/material';
import gamePlayBG from '../../../assets/images/gameplay-background.png';
import metaverseBG from '../../../assets/images/metaverse-background.png';
import nftsBG from '../../../assets/images/nfts-background.png';
import gameplayLogo from '../../../assets/images/gameplay-logo.png';
import metaverseLogo from '../../../assets/images/metaverse-logo.png';
import nftsLogo from '../../../assets/images/nfts-logo.png';
import glowLight from '../../../assets/images/glowLight.png';
import './nft.scss';

function Nft() {
  return (
    <section className="nfts">
      <Grid
        container
        justifyContent="center"
        spacing={0}
        className="nft-row"
      >
        <Grid item sm={4} sx={{}}>
          <Grid
            className="nft-box"
            sx={{
              background: `url(${gamePlayBG})`,
              '&:after': {
                content: '""',
                backgroundImage: `url(${glowLight})`,
              }
            }}
          >
            <img src={gameplayLogo} alt="gameplay Logo" style={{ transform: 'skew(10deg)' }} />
          </Grid>
        </Grid>
        <Grid item sm={4} sx={{}}>
          <Grid
            className="nft-box"
            sx={{
              background: `url(${metaverseBG})`,
              '&:before': {
                content: '""',
                backgroundImage: `url(${glowLight})`,
              }
            }}
          >
            <img src={metaverseLogo} alt="metaverse Logo" style={{ transform: 'skew(10deg)' }} />
          </Grid>
        </Grid>
        <Grid item sm={4} sx={{}}>
          <Grid
            className="nft-box"
            sx={{
              background: `url(${nftsBG})`,
              '&:after': {
                content: '""',
                backgroundImage: `url(${glowLight})`,
                right: '-335px',
              }
            }}
          >
            <img src={nftsLogo} alt="nfts Logo" />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default Nft;
