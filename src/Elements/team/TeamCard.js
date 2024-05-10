import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './teamCard.css';

const TeamCard = ({ image, heading, tagline }) => {
  return (
    <Grid className="team-card">
      <Box>
        <Box
          className="team-image"
          sx={{
            backgroundImage: `url(${image})`,
          }}
        ></Box>
        <div style={{ marginLeft: '15px' }}>
          <Typography
            variant="h3" className="team-title">
            {heading}
          </Typography>
          <Typography className="tagline">
            {tagline}
          </Typography>
        </div>
      </Box>
    </Grid>
  );
};
TeamCard.propTypes = {
  image: PropTypes.any,
  heading: PropTypes.string,
  tagline: PropTypes.string
};
export default TeamCard;
