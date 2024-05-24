import * as React from 'react';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';

const _Button = styled('button')({
  border: '1px solid #8f8f8f',
  cursor: 'pointer',
  color: 'white',
  fontFamily: "'sairaCondensed', 'serif'",
  fontSize: '2em',
  minWidth: '233px',
  lineHeight: '1',
  padding: '5px',
  background: 'rgba(27, 27, 27, 0.4)',
  backdropFilter: 'blur(5px)',
  borderRadius: '0',
  position: 'relative',
  WebkitClipPath:
    'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)',
  clipPath:
    'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)',
  '&:before, &:after': {
    position: 'absolute',
    height: '14px',
    width: '14px',
    backgroundColor: 'transparent',
    border: 'inherit',
    boxSizing: 'border-box',
    transform: 'scale(1.41) rotate(45deg)',
    content: '""'
  },
  '&:before': {
    top: 'calc(-14px / 2)',
    left: 'calc(-14px / 2)'
  },
  '&:after': {
    bottom: 'calc(-14px / 2)',
    right: 'calc(-14px / 2)'
  },
  transition: 'letter-spacing 0.5s ease-in-out',
  '&:hover': {
    background: 'radial-gradient(ellipse at top left, rgba(90, 159, 250, 0.42), transparent)',
    letterSpacing: '1px',
    transition: 'letter-spacing 0.5s ease-in-out'
  }
});

const Button = ({ children }) => {
  return <_Button>{children}</_Button>;
};
Button.propTypes = {
  children: PropTypes.any
};
export default Button;
