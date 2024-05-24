import * as React from 'react';
import { Box, Grid } from '@mui/material';
import gamesBg from '../../assets/images/games-background.png';
import vidFram from '../../assets/images/nft-vid.png';
import vidImage from '../../assets/images/nft-vid-image.png';
import bars from '../../assets/images/repeating-bars.png';
import './video.scss';
import Corners from '../../Elements/common/Corners';

function Video() {
  return (
    <section className="video">
      <Grid
        container
        justifyContent="center"
        alignContent="stretch"
        spacing={2}
        sx={{
          background: `linear-gradient(rgba(0,0,0, 0), #16355e),
          url(${gamesBg}) no-repeat top right,
          url(${gamesBg}) no-repeat bottom left`,
          minHeight: '1070px',
          position: 'relative'
        }}
      >
        <Grid md={12} sx={{ height: '70px', backgroundImage: `url(${bars})` }} />
        <Grid md={2} />
        <Grid md={8}>
          <div
            style={{
              backgroundImage: `url(${vidFram})`,
              backgroundSize: '100%, 100%',
              backgroundRepeat: 'no-repeat',
              padding: '25px',
              marginBottom: '25px',
              maxWidth: '85%',
              margin: 'auto',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '25px',
                left: '25px',
                right: '25px',
                bottom: '33px'
              }}
              className="corners"
            >
              <Corners tl br />
            </div>
            <img src={vidImage} alt="" style={{ width: '100%', height: '100%' }} />
          </div>
        </Grid>
        <Grid md={2} />
        <Box
          sx={{
            height: '70px',
            backgroundImage: `url(${bars})`,
            position: 'absolute',
            bottom: '0',
            width: '100%'
          }}
        />
      </Grid>
    </section>
  );
}

export default Video;
