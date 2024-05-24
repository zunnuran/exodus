import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import chevronsRight from '../../../assets/images/chevronsRight.svg';
import partnerBoxFocused from '../../../assets/images/partner-box-focused.svg';
import partnerBox from '../../../assets/images/partner-box.svg';
import partner1 from '../../../assets/images/partner-1.png';
import partner2 from '../../../assets/images/partner-2.png';
import partner3 from '../../../assets/images/partner-3.png';
import partner4 from '../../../assets/images/partner-4.png';
import partner5 from '../../../assets/images/partner-5.png';
import partner6 from '../../../assets/images/partner-6.png';
import './partners.scss';

export default function Partners() {
  const partners = [
    { img: partner1 },
    { img: partner2 },
    { img: partner3 },
    { img: partner4 },
    { img: partner5 },
    { img: partner6 },
    { img: partner1 },
    { img: partner2 },
    { img: partner3 }
  ];

  return (
    <section className="our-partners">
      <Grid container justifyContent="space-around" spacing={0}>
        <Grid item md={12} sm={12} lg={5} className="partners-heading">
          <Grid sx={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Typography className="subheading">OUR</Typography>
            </div>
            <div style={{ paddingTop: '20px' }}>
              <img src={chevronsRight} alt="" />
            </div>
          </Grid>
          <Typography className="heading">PARTNERS</Typography>
        </Grid>
        <Grid item md={12} sm={12} lg={7} className="partners-boxs">
          <Grid container spacing={0} alignItems="center" justifyContent="space-around">
            {partners.map((p, i) => (
              <Grid key={i} item className="partner-box">
                <Box
                  sx={{
                    backgroundImage: `url(${partnerBox})`,
                    transition: 'background-image 0.5s ease',
                    '&:hover': {
                      backgroundImage: `url(${partnerBoxFocused})`,
                      transition: 'background-image 0.5s ease'
                    }
                  }}
                >
                  <Box sx={{ '& img': { zIndex: 999 } }}>
                    <img src={p.img} alt="" style={{}} />
                  </Box>
                  <div className="partner-box-number">
                    <Typography>{`${i + 1}`.padStart(2, '0')}</Typography>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
