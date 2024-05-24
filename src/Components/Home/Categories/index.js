import * as React from 'react';
import Nft from './nft';
import Logos from './logos';
import Partners from './Partners';
import bgVideo from '../../../assets/videos/moon-space.mp4';
import './index.scss';

function Categories() {
  return (
    <div className="categories">
      <Nft />
      <Logos />
      <Partners />
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          width: 'auto',
          height: '100%',
          position: 'absolute',
          right: 0,
          top: 0,
          opacity: 1,
          zIndex: -1
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Categories;
