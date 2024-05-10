import * as React from 'react';
import Nft from './nft';
import Logos from './logos';
import Partners from './Partners';
import './index.scss';

function Categories() {
  return (
    <div className="categories">
      <Nft />
      <Logos />
      <Partners />
    </div>
  );
}

export default Categories;
