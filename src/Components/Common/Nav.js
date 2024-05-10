import * as React from 'react';
import {Box, Button, Grid, Menu, MenuItem, Toolbar} from '@mui/material';
import PropTypes from 'prop-types';
import {Fragment} from "react";
import mobileNavBg from '../../assets/images/mobile-nav-back.svg';
import mobileNavBars from '../../assets/images/nav-bars.svg';
import { useNavigate } from 'react-router-dom';
import './nav.scss';

function Nav(props) {
  const selected = props.selected;
  const sx = props.sx || {};
  const navItems = [
    { text: 'HOME', link: '/' },
    { text: 'NFT', link: '/nft' },
    { text: 'PORTFOLIO', link: '#' },
    { text: 'WHITE PAPER', link: '#' },
    { text: 'NEWS', link: '#'}
  ];

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Fragment>
      <Grid item lg={10} md={10} sx={{display: {xs: 'none', sm: 'block'}}} className="navbar">
        <Grid component="nav" sx={{textAlign: 'center', fontFamily: 'bankGothicBTMedium', ...sx}}>
          <Toolbar>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              className="items-container"
            >
              {navItems.map((item) => (
                <Button key={item.text} onClick={() => navigate(item.link)} className={selected === item.text ? 'selected item' : 'item'}>
                  {item.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Grid>
      </Grid>
      <Grid item xs={12}  sx={{display: {xs: 'block', sm: 'none'}}} className="navbar mobile-nav">
        <Grid component="nav">
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            backgroundImage: `url(${mobileNavBg})`,
            width: '100px',
            height: '70px'
          }}
        >
          <img src={mobileNavBars} alt=""/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            width: '90% '
          }}
        >
          {navItems.map((item) => (
            <MenuItem key={item.text} onClick={handleClose}>{item.text}</MenuItem>
            ))}
        </Menu>
        </Grid>
      </Grid>
    </Fragment>
  );
}

Nav.propTypes = {
  selected: PropTypes.string,
  sx: PropTypes.object
};

export default Nav;
