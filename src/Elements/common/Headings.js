import { Grid, Typography } from '@mui/material';
import chevronsLeft from '../../assets/images/chevronsLeft.svg';
import chevronsRight from '../../assets/images/chevronsRight.svg';
import * as React from 'react';
import PropTypes from 'prop-types';
import './headings.scss';

const Headings = function ({ subheading, heading, arrows }) {
  return (
    <Grid item xs={12} className="headings">
      {subheading ? <Typography className="subheading">{subheading}</Typography> : null}
      <Grid className="heading-container">
        {arrows ? (
          <div className="arrow">
            <img src={chevronsLeft} alt="" />
          </div>
        ) : null}
        <div>
          <Typography className="heading">{heading}</Typography>
        </div>
        {arrows ? (
          <div className="arrow">
            <img src={chevronsRight} alt="" />
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
};

Headings.propTypes = {
  subheading: PropTypes.string,
  heading: PropTypes.string,
  arrows: PropTypes.bool
};

export default Headings;
