import * as React from 'react';
import gameCorner from '../../assets/images/game-corner.svg';
import './corners.scss';
import PropTypes from 'prop-types';

const Corners = ({ tl, tr, bl, br }) => {
  const all = !(tl || tr || bl || br);
  return (
    <React.Fragment>
      {all || tl ? <img src={gameCorner} alt="" className="tl" /> : null}
      {all || tr ? <img src={gameCorner} alt="" className="tr" /> : null}
      {all || bl ? <img src={gameCorner} alt="" className="bl" /> : null}
      {all || br ? <img src={gameCorner} alt="" className="br" /> : null}
    </React.Fragment>
  );
};
Corners.propTypes = {
  tl: PropTypes.bool,
  tr: PropTypes.bool,
  bl: PropTypes.bool,
  br: PropTypes.bool
};
export default Corners;
