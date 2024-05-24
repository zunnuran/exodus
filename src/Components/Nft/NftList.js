import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { fadeInLeft, fadeInRight } from '../../utils';
import Corners from '../../Elements/common/Corners';
import chevronsLeft from '../../assets/images/chevronsLeft.svg';
import chevronsRight from '../../assets/images/chevronsRight.svg';
import cutEdgeBg from '../../assets/images/cut-edge-bl.svg';
import cutEdgeBgBr from '../../assets/images/cut-edge-br.svg';

import nft1 from '../../assets/images/nft-1.png';
import nft2 from '../../assets/images/nft-2.png';
import nft3 from '../../assets/images/nft-3.png';
import nft4 from '../../assets/images/nft-4.png';
import nft5 from '../../assets/images/nft-5.png';
import nft6 from '../../assets/images/nft-6.png';
import nft7 from '../../assets/images/nft-7.png';
import nft8 from '../../assets/images/nft-8.png';
import Slides from '../Common/Slides';
import './nftList.scss';

export function NftList() {
  const nfts = [nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8];
  return (
    <Grid component="section" className="nft-list">
      <Grid container justifyContent="center" alignContent="space-between" spacing={2}>
        <Grid xs={12} className="nft-list-headings">
          <Typography className="subheading">OUR</Typography>
          <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ paddingTop: '30px' }}>
              <img src={chevronsLeft} alt="" />
            </div>
            <div>
              <Typography className="heading">NFTS</Typography>
            </div>
            <div style={{ paddingTop: '30px' }}>
              <img src={chevronsRight} alt="" />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignContent="space-between"
        spacing={2}
        position="relative"
      >
        {nfts.map((n, i) => (
          <Grid
            key={`nft-${i}`}
            md={6}
            sm={12}
            xs={12}
            className="nft-list-images animated"
            sx={{
              '&.animated.visible': {
                animation: `${i % 2 === 0 ? fadeInLeft : fadeInRight} 1s ease-in`
              }
            }}
          >
            <Box
              sx={{
                position: 'relative',
                '& .tl': { top: '16px !important', left: '16px !important' },
                '& .tr': { top: '16px !important', right: '16px !important' },
                '& .bl': { bottom: '24px !important', left: '16px !important' },
                '& .br': { bottom: '24px !important', right: '16px !important' }
              }}
              className="corners"
            >
              <Corners
                {...(() => ((i + 1) % 2 === 0 ? { tl: true, br: true } : { tr: true, bl: true }))()}
              />
              <img
                src={(i + 1) % 2 === 0 ? cutEdgeBg : cutEdgeBgBr}
                className="cut-edge-bg"
                alt="cut edge background"
              />
              <img src={n} className="cut-edge-img" alt="Main image" />
            </Box>
          </Grid>
        ))}
        <Grid sx={{ position: 'absolute', right: '-30px', top: '50%' }}>
          <Slides />
        </Grid>
      </Grid>
    </Grid>
  );
}
